import {ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import { Routes,Route } from "react-router-dom";

import Layout from "./components/Layout";
import Dashboard from "./components/DashBoard";
const theme = createTheme({
  palette: {
    primary: {
      main: "#fefefe",
    },
    secondary: purple,
  },

  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    button: {
      textTransform: "none",
    },
  },
});
function App() {

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard/>} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
