import {Container} from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {useState} from "react";
import {invoke} from "@tauri-apps/api/tauri";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export function PostDetails() {
    const [postDetails, setPostDetails] = useState("");
    const [id, setPostId] = useState("");

    async function getPost() {
        console.log("Attempting to get post")
        // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
        setPostDetails(await invoke("get_post", { id }));
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
                    onChange={(e) => setPostId(e.currentTarget.value)}
                    placeholder="Enter a post id..."
                />
                <Button variant="contained" type="submit">Get</Button>
            </Box>
            <Typography variant="body1" color="text.primary" align="center">{postDetails}</Typography>
        </Container>
    )
}