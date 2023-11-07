import "./App.css";
import Divider from '@mui/material/Divider';
import Typography from "@mui/material/Typography";
import Footer from './components/Footer'
import {PostDetails} from "./components/PostDetails.tsx";
import CreatePost from "./components/CreatePost.tsx";
import {Container} from "@mui/material";

function App() {

    const containerStyle = {
        margin: '0',
        paddingTop: '10vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
    }

    const dividerStyle = {
        width: '100%',
        align: 'bottom',
        bgcolor: 'background.paper',
    };



  return (
    <Container sx={containerStyle}>
      <Typography variant="h4" color="text.primary" align="center" margin={3}>Welcome to Tauri!</Typography>

      <Typography variant="body1" color="text.primary" align="center">Click on the Tauri, Vite, and React logos to learn more.</Typography>

      <CreatePost />

      <PostDetails />

      <Divider sx={dividerStyle} />
      <Footer />
    </Container>
  );
}

export default App;
