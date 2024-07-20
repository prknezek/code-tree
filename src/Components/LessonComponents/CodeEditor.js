import { React, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";

import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { loadLanguage, langs } from '@uiw/codemirror-extensions-langs';

function CodeEditor() {
  const langNames = ['c', 'csharp', 'javascript', 'python', 'java', 'cpp'];
  var [language, setLanguage] = useState(loadLanguage('python'));
  var [langName, setLangName] = useState('Python');

  const handleLanguageChange = (lang) => {
    setLanguage(loadLanguage(lang));
    setLangName(lang.charAt(0).toUpperCase() + lang.slice(1));
  };

  return (
    <div className="w-100 p-lg-3 px-lg-5 rounded">
      <div className="bg-dark py-2 ps-2">
        <div class="btn-group">
          <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            {langName}
          </button>
          <ul class="dropdown-menu">
            {langNames.map((lang) => (
              <li key={lang}>
                <button onClick={() => handleLanguageChange(lang)} className="dropdown-item" href="#">{lang.charAt(0).toUpperCase() + lang.slice(1)}</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <CodeMirror
        value={"print('Hello World')"}
        height="60vh"
        extensions={language}
        theme={vscodeDark}
        style={{ fontSize: 16, letterSpacing: 1.7 }}
      />
    </div>
  );
}

export default CodeEditor;