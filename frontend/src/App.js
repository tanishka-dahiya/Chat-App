import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Chat from "./components/Chat";
import FormContainer from "./components/landingPage";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
