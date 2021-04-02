import path from "path";
import React, { useRef, Fragment } from "react";
import ReactDOM from "react-dom";

import Editor, { loader } from "@monaco-editor/react";

// https://github.com/microsoft/monaco-editor-samples/blob/master/electron-amd-nodeIntegration/electron-index.html
function uriFromPath(fullPath: string) {
  let pathName = path.resolve(fullPath).replace(/\\/g, "/");

  if (pathName.length > 0 && pathName.charAt(0) !== "/") {
    pathName = `/${pathName}`;
  }
  return encodeURI(`file://${pathName}`);
}

loader.config({
  paths: {
    vs: uriFromPath(
      path.join(
        __dirname,
        "..",
        "..",
        "node_modules",
        "monaco-editor",
        "min",
        "vs"
      )
    ),
  },
});

function App() {
  const editorRef = useRef(null);

  function handleEditorDidMount(editor: any, monaco: any) {
    editorRef.current = editor;
  }

  function showValue() {
    alert(editorRef.current.getValue());
  }

  return (
    <div>
      <button onClick={showValue}>Show value</button>
      <Editor
        height="90vh"
        defaultLanguage="javascript"
        defaultValue="// some comment"
        onMount={handleEditorDidMount}
      />
    </div>
  );
}

export function createReactApp() {
  const rootElement = document.getElementById("react");
  ReactDOM.render(<App />, rootElement);
}
