import React, { Component } from "react";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import Header from "./Header";
const URL = "ws://localhost:3030";

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
    this.setState(state => ({ messages: [message, ...state.messages] }));

  submitMessage = messageString => {
    // on submitting the ChatInput form, send the message, add it to the list and reset the input
    const message = { name: this.state.name, message: messageString };
    this.ws.send(JSON.stringify(message));
    this.addMessage(message);
  };

  render() {
    return this.state.isjoined == true ? (
      <div>
        {" "}
        <ChatInput
          ws={this.ws}
          onSubmitMessage={messageString => this.submitMessage(messageString)}
        />
        {this.state.messages.map((message, index) => (
          <ChatMessage
            key={index}
            message={message.message}
            name={message.name}
            yourName={this.state.name}
          />
        ))}
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
