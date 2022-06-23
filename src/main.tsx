import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TasksProvider } from "./context/TasksContext";
import { theme } from "./theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <TasksProvider>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </TasksProvider>
);
