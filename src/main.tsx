import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/home/App.tsx";
import "./main.css";
import { ModalState } from "./context/modalContext.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ModalState>
        <App />
      </ModalState>
    </BrowserRouter>
  </React.StrictMode>
);
