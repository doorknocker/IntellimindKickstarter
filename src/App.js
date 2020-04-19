import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Home from "./pages/Home";
import WaitList from "./pages/WaitList";
import NotFound from "./pages/NotFound";

import GlobalStyle from "./styles/globalStyles";
import { theme as styledTheme } from "./styles/theme";

const App = () => (
  <ThemeProvider theme={styledTheme}>
    <GlobalStyle />
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/waitlist">
          <WaitList />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;
