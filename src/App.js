import React from "react";
import ReactDOM from "react-dom";

import Routes from "./Routes";
import './styles.css';

export default function App() {
  return (
    <div className="app">
      <Routes />
    </div>
  )
}

const item = document.getElementById('root');
ReactDOM.render(<App />, item);
