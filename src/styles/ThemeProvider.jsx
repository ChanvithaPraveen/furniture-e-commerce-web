import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import React from "react";
import Colors from "./colors";

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.skyBlue, 
    },
    secondary: {
      main: Colors.white, 
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
  },
});

const ThemeProvider = ({ children }) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

export default ThemeProvider;
