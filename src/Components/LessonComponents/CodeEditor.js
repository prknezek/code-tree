import { React, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";

import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { loadLanguage } from '@uiw/codemirror-extensions-langs';

function CodeEditor() {
  const langNames = {'c': 'C', 'csharp': 'C#', 'javascript': 'JavaScript', 'python': 'Python3', 'java': 'Java', 'cpp': 'C++'};
  var [language, setLanguage] = useState(loadLanguage('python'));
  var [langName, setLangName] = useState('Python3');

  const handleLanguageChange = (lang) => {
    setLanguage(loadLanguage(lang));
    setLangName(langNames[lang]);
  };

  return (
    <div className="w-100 p-lg-3 px-lg-5 rounded">
      <div className="bg-dark py-2 ps-2">
        <div class="btn-group">
          <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            {langName}
          </button>
          <ul class="dropdown-menu">
            {Object.entries(langNames).map(([lang, name]) => (
              <li key={lang}>
                <button onClick={() => handleLanguageChange(lang)} className="dropdown-item" href="#">{name}</button>
              </li>
            ))}
            {/* {langNames.keys().map((lang) => (
              <li key={lang}>
                <button onClick={() => handleLanguageChange(lang)} className="dropdown-item" href="#">{lang.charAt(0).toUpperCase() + lang.slice(1)}</button>
              </li>
            ))} */}
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