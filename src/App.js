import React from "react";
import ReactDOM from "react-dom";

import Routes from "./Routes";

export default function App() {
  return (
    <div className="App">
      <Routes />
    </div>
  )
}

const item = document.getElementById('root');
ReactDOM.render(<App />, item);
