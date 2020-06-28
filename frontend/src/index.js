import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const darkTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#121212",
    },
    secondary: {
      main: "#121212",
    },
  },
  paper: {
    background: "blue",
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
