import { useEffect } from "react";
import Login from "./pages/Login";
import { ThemeProvider } from "@mui/material/styles";
import theme from "assets/theme";
import themeDark from "assets/theme-dark";
import { useMaterialUIController } from "context";
import SignUp from "pages/SignUp";
import Feed from "pages/Feed";
import Navbar from "pages/Navbar";

function App() {
  const [controller, dispatch] = useMaterialUIController();

  const { direction, darkMode } = controller;

  // Setting page scroll to 0 when changing the route

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, []);
  return (
    <ThemeProvider theme={darkMode ? themeDark : theme}>
      <div className="App">
        <Navbar />
        <Feed />
      </div>
    </ThemeProvider>
  );
}

export default App;
