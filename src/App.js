import React, { useState, useEffect } from "react";
import "./App.css";
import Message from "./Message";
import Iconn from "./images/icon.png";
import { IconButton } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import db from "./firebase";
import firebase from "firebase";

function App() {
  const [messages, setMessaages] = useState([]);

  const [input, setInput] = useState("");

  const [username, setUsername] = useState("");

  useEffect(() => {
    setUsername(prompt("enter your username..."));
  }, []);

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessaages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    db.collection("messages").add({
      username: username,
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="app">
      <img src={Iconn} width="100" height="100" alt="messenger icon" />
      <h5>
        Welcome{" "}
        <i>
          <b>{username}</b>
        </i>
      </h5>
      {messages.map((message) => (
        <React.Fragment>
          <Message message={message} username={username} />
        </React.Fragment>
      ))}
      <div className="app__form">
        <form>
          <input
            className="app__input form-control"
            type="text"
            value={input}
            placeholder="Type a message"
            onChange={(e) => setInput(e.target.value)}
            autoFocus
          />
          <IconButton
            className="app__button"
            color="primary"
            variant="contained"
            onClick={submitHandler}
            type="submit"
            disabled={!input}
          >
            <SendIcon />
          </IconButton>
        </form>
      </div>
    </div>
  );
}

export default App;
