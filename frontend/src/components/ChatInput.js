import React, { Component } from "react";
import PropTypes from "prop-types";
import "./ChatInput.css";
import Picker from "emoji-picker-react";
import { FaSmileBeam } from "react-icons/fa";

class ChatInput extends Component {
  static propTypes = {
    onSubmitMessage: PropTypes.func.isRequired
  };
  state = {
    message: "",
    isEmojiPanelopen: false
  };
  onEmojiClick = (event, emojiObject) => {
    console.log("heee");
    var result = this.state.message + emojiObject.emoji;
    this.setState({ message: result });
  };
  onIconClick = () => {
    this.setState({ isEmojiPanelopen: !this.state.isEmojiPanelopen });
  };
  render() {
    return (
      <React.Fragment>
        <div
          className={
            this.props.length <= 7 ? "msger-inputarea" : "msger-defaul"
          }
        >
          {this.state.isEmojiPanelopen && (
            <div className="emoji-picker">
              <Picker onEmojiClick={this.onEmojiClick} />
            </div>
          )}
          <input
            type="text"
            placeholder={"Enter message..."}
            className="msger-input"
            value={this.state.message}
            onChange={e => this.setState({ message: e.target.value })}
          />
          <FaSmileBeam className="emoji" onClick={this.onIconClick} />
          <input
            type="submit"
            value={"Send"}
            className="msger-send-btn"
            onClick={e => {
              e.preventDefault();
              this.props.onSubmitMessage(this.state.message);
              this.setState({ message: "" });
            }}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default ChatInput;
