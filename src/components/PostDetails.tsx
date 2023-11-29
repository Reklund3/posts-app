import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React, {useState} from "react";
import {invoke} from "@tauri-apps/api/tauri";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

export function PostDetails() {
    class Post {
        id: string;
        user_id: string;
        body: string;


        static toInstance<T>(obj: T, json: string) : T {
            var jsonObj = JSON.parse(json);

            if (typeof obj["fromJSON"] === "function") {
                obj["fromJSON"](jsonObj);
            }
            else {
                for (var propName in jsonObj) {
                    obj[propName] = jsonObj[propName]
                }
            }

            return obj;
        }
    }


    const [postBody, setPostBody] = useState("");
    const [postUserId, setPostUserId] = useState("");
    const [id, setPostId] = useState("");

    async function getPost() {
        console.log("Attempting to get post")
        // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
        var result: string = await invoke("get_post", {id})
        var post = Post.toInstance(new Post, result)
        console.log("The success result was ", post.body)
        setPostUserId(post.user_id);
        setPostBody(post.body);
    }

    function handleOnChenge(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setPostId(e.currentTarget.value);
    }

    return (
        <Container>
            <Box
                component={"form"}
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                onSubmit={(e) => {
                    e.preventDefault();
                    getPost();
                }}
            >
                <TextField
                    id="post-id"
                    label="post-id"
                    variant="outlined"
                    onChange={handleOnChenge}
                    placeholder="Enter a post id..."
                />
                <Button variant="contained" type="submit">Get</Button>
            </Box>
            <List>
                <ListItem>
                    <ListItemText primary="User Id" secondary={postUserId} />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Body" secondary={postBody} />
                </ListItem>
            </List>
            <Typography variant="body1" color="text.primary" align="center">{postBody}</Typography>
        </Container>
    )
}