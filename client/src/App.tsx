import {ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import { Routes,Route } from "react-router-dom";
import { Box, width } from "@mui/system";
import Layout from "./components/Layout";
import Dashboard from "./components/DashBoard";
import { createContext, useContext, useMemo, useState } from "react";

const themeContext = createContext({toggleColorMode:()=>{}})
function App() {
  const [mode, setMode] = useState<"dark" | "light">("light")
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          primary: {
            main: "#fefefe",
          },
          secondary: purple,
          mode: "dark",
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
      }),
    [mode]
  );
  return (
    <ThemeProvider theme={theme}>
    
        <div
          style={{ background: theme.palette.mode === "dark" ? "black" : "" }}
        >
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />} />
            </Route>
          </Routes>
        </div>
      
    </ThemeProvider>
  );
}

export default App;
