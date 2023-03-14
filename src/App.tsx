import './styles/App.scss';

import React, { useState } from 'react';

import { Action } from './components/action/action.component';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="header">
          🚀 Vite + React + Typescript 🤘 & <br />
          Eslint 🔥+ Prettier
        </p>
        <div className="body">
          <Action styleType="primary" as="button">
            Button
          </Action>
          <Action styleType="secondary" as="button">
            secondary
          </Action>
          <Action styleType="outline" as="button">
            outline
          </Action>
          <Action styleType="link" as="button">
            link
          </Action>
          <Action styleType="header" as="button">
            header
          </Action>

          <p> Don&apos;t forgot to install Eslint and Prettier in Your Vscode.</p>

          <p>
            Mess up the code in <code>App.tsx </code> and save the file.
          </p>
          <p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            {' | '}
            <a
              className="App-link"
              href="https://vitejs.dev/guide/features.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vite Docs
            </a>
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
