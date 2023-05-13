import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider, theme } from "@chakra-ui/react";

ReactDOM.render(
  <React>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React>,
  document.getElementById("root")
);
