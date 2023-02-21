import { ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import { Routes, Route } from "react-router-dom";
import { Box, width } from "@mui/system";
import Layout from "./components/Layout";
import Dashboard from "./components/DashBoard";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

export const ThemeContext = createContext({toggleColorMode:()=>{}})

function App() {

  const [mode, setMode] = useState<"dark" | "light">(() => {
    const localData = localStorage.getItem("theme");
    return localData ? JSON.parse(localData):"light"
  })
 useEffect(() => {
   localStorage.setItem("theme", JSON.stringify(mode));
 }, [mode]);
  
 const colorMode = useMemo(
   () => ({
     toggleColorMode: () => {
       setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
     },
   }),
   []
 );
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          primary: {
            main: "#fefefe",
          },
          secondary: purple,
          mode: mode,
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
    <ThemeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <main
          style={{ background: theme.palette.mode === "dark" ? "black" : "" ,height:"100vh",overflow:"scroll"}}
        >
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />} />
            </Route>
          </Routes>
        </main>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
