import React, { Component } from "react";
import "./App.css";

import AutoCompleteText from "./AutoCompleteText/AutoCompleteText";

class App extends Component {

  render() {
    return (
      <div className="App">
      <h1 className="App-title"> Search Greatest Footballers... </h1>
        <div className="App-Component">
          <div className="App-Component">
            <AutoCompleteText />
          </div>
        </div>
      </div>
    );
  }
}

export default App;