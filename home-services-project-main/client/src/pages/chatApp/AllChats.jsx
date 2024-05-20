import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
var user_id = localStorage.getItem("user_id"); //
const AllChats = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const fetchMessages = async () => {
      const response = await axios.get(
        "http://localhost:4000/chatapp/messages"
      );
      setMessages(response.data);
    };
    fetchMessages();
  });

  return (
    <div
      className="chat-list"
      style={{
        backgroundColor: "#f0f0f0",
        width: "100%",
        height: "100%",
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {messages
        .filter((chat) => chat.sender_id == JSON.parse(user_id))
        .map((message) => (
          <div
            div
            style={{
              backgroundColor: "black",
              margin: "10px",
              padding: "10px",
              borderRadius: "10px",
              color: "white",
            }}
            onClick={() => {
              var route =
                "/chatscreen?pram1=" +
                message.receiver_id +
                "&pram2=" +
                message.sender_id;
              navigate(route);
            }}
          >
            {/* key={message.id} */}
            {/* // className={`chat-message ${selectedChat === message.message_id ? "selected" : ""}`} */}
            {/* onClick={() => onSelectChat(message.sender_id)} */}

            <div className="message-info">
              <p className="name">{message.text}</p>
              <p className="status">{message.receiver_id}</p>
              <p className="status">{user_id}</p>
              <p className="status">{message.sender_id}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default AllChats;
