import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { changeLanguage } from "./context";
function Apps() {
  const [change, setchange] = React.useState("en-US");

  return (
    <>
      <React.StrictMode>
        <changeLanguage.Provider value={[change, setchange]}>
          <App />
        </changeLanguage.Provider>
      </React.StrictMode>
    </>
  )
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Apps />
);
