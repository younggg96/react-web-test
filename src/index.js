import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import theme from "./assets/theme/theme";
import { ThemeProvider } from "@material-ui/core/styles";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
