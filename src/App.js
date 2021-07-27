import React, { Component } from "react";
import ReactDOM from "react-dom";
export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Olá Mundo!</h1>
      </div>
    )
  }
}
const item = document.getElementById('root');
ReactDOM.render(<App />, item);
