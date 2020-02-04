import React from "react";
import "./ChatInput.css";

export default ({ name, message, yourName, time }) => {
  return (
    <main class="msger-chat">
      <div class={yourName === name ? "msg right-msg" : "msg left-msg"}>
        <div class="msg-img"></div>

        <div class="msg-bubble">
          <div class="msg-info">
            <div class="msg-info-name">{name}</div>
            <div class="msg-info-time">{time}</div>
          </div>

          <div class="msg-text">{message}</div>
        </div>
      </div>
    </main>
  );
};
