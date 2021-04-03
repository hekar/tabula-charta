import path from "path";
import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import * as monaco from "monaco-editor/esm/vs/editor/editor.api";

import Editor, { loader, Monaco } from "@monaco-editor/react";

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

export type MapEditorRange = {
  startLineNumber: number;
  endLineNumber: number;
};

export type MapEditorProps = {
  onTextChanged: (range: MapEditorRange) => void;
};

export function MapEditor({ onTextChanged }: MapEditorProps) {
  const editorRef = useRef(null);
  const [position, setPosition] = useState(0);

  function handleEditorDidMount(
    editor: monaco.editor.IStandaloneCodeEditor,
    monaco: Monaco
  ) {
    editor.onDidChangeCursorPosition(
      (e: monaco.editor.ICursorPositionChangedEvent) => {
        setPosition(e.position.lineNumber);
      }
    );
    editor.onDidChangeModelContent(
      (e: monaco.editor.IModelContentChangedEvent) => {
        for (const change of e.changes) {
          const { startLineNumber, endLineNumber } = change.range;
          setTimeout(() => {});
        }
      }
    );
    editorRef.current = editor;
  }

  return (
    <div>
      <Editor
        height="100vh"
        defaultLanguage="yaml"
        defaultValue=""
        theme="vs-dark"
        onMount={handleEditorDidMount}
      />
    </div>
  );
}
