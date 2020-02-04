import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Chat from "./components/Chat";
import FormContainer from "./components/landingPage";
import Wrapper from "./components/Wrapper";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Wrapper Form={<FormContainer />} />
      </div>
    );
  }
}

export default App;
