
import { ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Dashboard from "./components/DashBoard";
import { createContext, useEffect, useMemo, useState,MouseEvent } from "react";

export const ThemeContext = createContext({ toggleColorMode: () => { } });
/**@desc share context notification context. notifications can be opened from header component */
export const NotificationContext = createContext<{anchorEl:null|HTMLElement,handleNotifications:(event:MouseEvent<HTMLElement>)=>void,handleClose:()=>void}>({
  anchorEl: null,
  handleNotifications:(event:MouseEvent<HTMLElement>)=>{},
  handleClose:()=>{}
});
const App=()=> {
  const [mode, setMode] = useState<"dark" | "light">(() => {
    const localData = localStorage.getItem("theme");
    return localData ? JSON.parse(localData) : "light";
  });

  const [anchorEl, setAnchorEl] = useState<null|HTMLElement>(null);
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

  const handleNotifications = (event: MouseEvent<HTMLElement>) => {
   
    setAnchorEl(event.currentTarget)

   
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <ThemeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <NotificationContext.Provider
          value={{ anchorEl, handleNotifications, handleClose }}
        >
          <main
            style={{
              background: theme.palette.mode === "dark" ? "black" : "",
              height: "100vh",
              overflow: "scroll",
            }}
          >
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Dashboard />} />
              </Route>
            </Routes>
          </main>
        </NotificationContext.Provider>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
