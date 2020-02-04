import React, { Component } from "react";
import PropTypes from "prop-types";
import "./ChatInput.css";

class ChatInput extends Component {
  static propTypes = {
    onSubmitMessage: PropTypes.func.isRequired
  };
  state = {
    message: ""
  };

  render() {
    return (
      <form
        class="msger-inputarea"
        action="."
        onSubmit={e => {
          e.preventDefault();
          this.props.onSubmitMessage(this.state.message);
          this.setState({ message: "" });
        }}
      >
        <input
          type="text"
          placeholder={"Enter message..."}
          className="msger-input"
          value={this.state.message}
          onChange={e => this.setState({ message: e.target.value })}
        />
        <input type="submit" value={"Send"} className="msger-send-btn" />
      </form>
    );
  }
}

export default ChatInput;
