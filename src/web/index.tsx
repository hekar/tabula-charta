import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import { MapEditor } from "./MapEditor";

function App() {
  return <MapEditor />;
}

export function createReactApp() {
  const rootElement = document.getElementById("react");
  rootElement.style.position = "absolute";
  rootElement.style.top = "0";
  rootElement.style.left = "50vw";
  rootElement.style.right = "100%";
  rootElement.style.bottom = "100%";
  rootElement.style.width = "50vw";
  ReactDOM.render(<App />, rootElement);
}
