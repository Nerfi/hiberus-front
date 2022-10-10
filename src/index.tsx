import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import RoutesComp from "./Components/Routes";
import SmallWithSocial from "./Components/UI/Footer";
import SelectedItems from "./Components/context/SelectedItems";
import {ItemsContextProvider} from "./Components/context/ItemsAddedContext";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ItemsContextProvider>
    <SelectedItems>
      <RoutesComp>
        <App />
      </RoutesComp>
    </SelectedItems>
    </ItemsContextProvider>
    <SmallWithSocial />
  </React.StrictMode>
);
