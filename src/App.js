import React from "react";
import Nav from "./components/nav/Nav";
import { ThemeProvider } from '@mui/material';
import Theme from "./utils/Theme";

function App() {
  return (
    <div>
      <ThemeProvider theme={Theme}>
        <Nav />
      </ThemeProvider>
    </div>
  );
}

export default App;
