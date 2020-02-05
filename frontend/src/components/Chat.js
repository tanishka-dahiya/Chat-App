import React, { Component } from "react";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import Header from "./Header";
const URL = "wss://chat-app-1997.herokuapp.com/";

class Chat extends Component {
  state = {
    name: "",
    messages: [],
    isjoined: false
  };

  ws = new WebSocket(URL);

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };
  handleNameSubmit = () => {
    this.setState({ isjoined: true });
  };
  componentDidMount() {
    this.ws.onopen = () => {
      // on connecting, do nothing but log it to the console
      console.log("connected");
    };

    this.ws.onmessage = evt => {
      // on receiving a message, add it to the list of messages
      console.log(evt);
      const message = JSON.parse(evt.data);
      this.addMessage(message);
    };

    this.ws.onclose = () => {
      console.log("disconnected");
      // automatically try to reconnect on connection loss
      this.setState({
        ws: new WebSocket(URL)
      });
    };
  }

  addMessage = message =>
    this.setState(state => ({ messages: [...state.messages, message] }));

  submitMessage = messageString => {
    // on submitting the ChatInput form, send the message, add it to the list and reset the input
    let today = new Date();
    let DtaeEXact = today.getHours() + ":" + today.getMinutes();
    const message = {
      name: this.state.name,
      message: messageString,
      time: DtaeEXact
    };
    this.ws.send(JSON.stringify(message));
    this.addMessage(message);
  };

  render() {
    return this.state.isjoined == true ? (
      <div>
        {" "}
        {this.state.messages.map((message, index) => (
          <ChatMessage
            key={index}
            message={message.message}
            name={message.name}
            yourName={this.state.name}
            time={message.time}
          />
        ))}
        <ChatInput
          ws={this.ws}
          onSubmitMessage={messageString => this.submitMessage(messageString)}
          length={this.state.messages.length}
        />
      </div>
    ) : (
      <Header
        handleNameChange={this.handleNameChange}
        handleNameSubmit={this.handleNameSubmit}
      />
    );
  }
}

export default Chat;
