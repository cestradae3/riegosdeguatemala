import { createTheme } from "@mui/material";
import { red,indigo} from "@mui/material/colors";

export const blueTheme = createTheme({
    palette: {
        primary: {
            main: '#202C7A'
        },
        secondary: {
            main: '#384884'
        },
        error: {
            main: red.A400
        }
    }
})