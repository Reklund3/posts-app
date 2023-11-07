import {useState} from "react";
import {invoke} from "@tauri-apps/api/tauri";
import {Container} from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


export default function CreatePost() {
    const [result, setResult] = useState("");
    const [body, setPostBody] = useState("");
    const [user_id, _] = useState("7D23AA96-8EC5-4BD9-8AAC-99824A4DDEC7");


    async function createPost() {
        console.log("Attempting to get post")
        // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
        setResult(await invoke("create_post", { user_id, body }));
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
                    createPost();
                }}
            >
                <TextField
                    id="post-body"
                    label="post-body"
                    variant="outlined"
                    onChange={(e) => setPostBody(e.currentTarget.value)}
                    placeholder="Enter a message..."
                />
                <Button variant="contained" type="submit">Submit</Button>
            </Box>
            <Typography variant="body1" color="text.primary" align="center">{result}</Typography>
        </Container>
    );
}