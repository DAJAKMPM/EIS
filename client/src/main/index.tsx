import React from "react";
import {Container} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/core/styles";
import {outerTheme} from "./styles";
import Routes from "../routes";
import "fontsource-roboto";

const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={outerTheme}>
        <Container maxWidth="lg" component="main">
          <Routes />
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default App;
