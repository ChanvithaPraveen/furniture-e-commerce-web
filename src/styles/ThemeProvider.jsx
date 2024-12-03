import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import React from "react";
import Colors from "styles/colors"

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.sky-blue, // Sky Blue
    },
    secondary: {
      main: Colors.white, // White
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
