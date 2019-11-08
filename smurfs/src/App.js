import React, { Component } from "react";
import "./App.css";
import SmurfList from './smurfs/SmurfList';
import SmurfForm from "./smurfs/SmurfForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SmurfList/>
        <SmurfForm/>
      </div>
    );
  }
}

export default App;
