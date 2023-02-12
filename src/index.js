import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "App";
import { QueryClientProvider, QueryClient } from "react-query";
import { MaterialUIControllerProvider } from "context";

const queryClient = new QueryClient();

ReactDOM.render(
  <BrowserRouter>
    <MaterialUIControllerProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </MaterialUIControllerProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
