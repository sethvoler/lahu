import React, { useState, useEffect } from 'react';
import './index.less';

import MonacoEditor from 'react-monaco-editor';

type EditorProps = {
  code?: string,
  language?: string
}

const Editor: React.FC<EditorProps> = ({ code, language }) => {
  const options = {
    selectOnLineNumbers: true
  };

  const editorDidMount = (editor: any, monaco: any) => {
    editor.focus();
  }

  return <MonacoEditor
    width="800"
    height="100%"
    language={language}
    theme="vs-dark"
    value={code}
    options={options}
    editorDidMount={editorDidMount}
  />;
};

export default Editor;
