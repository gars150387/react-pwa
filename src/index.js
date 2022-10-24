import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { StytchProvider, initStytch } from "@stytch/stytch-react";

const stytch = initStytch(
  "public-token-live-2f9347c6-5da9-4599-a2d4-63b1ea807719"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
      <StytchProvider stytch={stytch}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StytchProvider>
    </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
