import { useState } from "react";
import { Box } from "@mui/material";
import Navbar from "./Navbar/Navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MainContent from "./MainContent/MainContent";
import DetailedContent from "./DetailedContent/DetailedContent";
import SubscribeNewsletter from "./SubscribeNewsletter/SubscribeNewsletter";
import Footer from "./Footer/Footer";

const themes = {
  main: {
    palette: {
      warning: {
        main: "#e65100"
      },
      info: {
        main: "#00BCDA",
      },
      primary: {
        light: "#166BA7",
        main: "#166BA7",
        dark: "#00347A",
      },
      secondary: {
        light: "#BFBFBF",
        main: "#303030",
        dark: "#162840",
      },
    },
  },

  dark: {
    palette: {
      warning: {
        main: "#6d4c41"
      },
      info: {
        main: "#0097a7",
      },
      primary: {
        light: "#26a69a",
        main: "#00897b",
        dark: "#004d40",
      },
      secondary: {
        light: "#bcaaa4",
        main: "#6d4c41",
        dark: "#3e2723",
      },
    },
  },
};

function App() {
  const [themeName, setThemeName] = useState<string>("main");
  return (
    <ThemeProvider theme={createTheme((themes as any)[themeName])}>
      <Box>
        <Navbar themeName={themeName} setThemeName={setThemeName} />

        <MainContent />

        <DetailedContent />

        <SubscribeNewsletter />

        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
