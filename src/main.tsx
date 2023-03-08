import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import { store } from "@/apps/store/store";

import App from "./App";

import "@/assets/styles/style.css";

import "@/locale";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <ApolloProvider client={client}>
       
      </ApolloProvider> */}
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
