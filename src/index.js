// react hook , react
import React from "react";
import App from "./App";

// recoil ( 상태관리 )
import { RecoilRoot } from "recoil";

// react library
import ReactDOM from "react-dom/client";

// styled-components , Style Files

// Components

// Icons , Images

// Share , Utils

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
);
