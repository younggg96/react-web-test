import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ee4420",
      dark: "#5f5f5f82"
    },
    secondary: {
      light: "#f6f6f6",
      main: "#252525",
      dark: "#2a2a2b"
    },
  },
  typography: {
    fontFamily: "Barlow",
    button: {
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 16
  }
});

export default theme;
