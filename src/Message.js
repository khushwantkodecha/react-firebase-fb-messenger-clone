import React from "react";
import "./Message.css";

function Message({ message, username }) {
  const isUser = username === message.username;

  return (
    <div className={`message__div ${isUser && "message__self"}`}>
      <p>
        {!isUser && <b> {`${message.username}:`}</b>} {message.message}
      </p>
    </div>
  );
}

export default Message;
