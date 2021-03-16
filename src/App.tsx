import React from "react";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import "./App.css";

import store from "./store";
import theme from "./styles/theme";
import Home from "./pages/Home";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Home />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
