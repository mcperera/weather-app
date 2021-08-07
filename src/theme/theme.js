import { red } from "@material-ui/core/colors";
import { createTheme } from "@material-ui/core/styles";
import typography from "./typography";

const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
  typography,
});

export default theme;
