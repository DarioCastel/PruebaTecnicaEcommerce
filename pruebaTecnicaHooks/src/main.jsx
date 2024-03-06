import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {Contexto} from "./context/Contexto.jsx";
import { CartContexto } from "./context/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartContexto>
    <Contexto>
      <App />
    </Contexto>
    </CartContexto>
  </React.StrictMode>
);
