import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: '#3700B3',
            light: '#556cd6',
            dark: '#3700B3',
            contrastText: '#FFFFFF'
        },
        secondary: {
            main: '#03DAC6',
            light: '#19857b',
            dark: '#03DAC6',
            contrastText: '#FFFFFF'
        },
        error: {
            main: red.A400,
        },
    },
});

export default theme;