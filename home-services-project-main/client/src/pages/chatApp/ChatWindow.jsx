import React from "react";
import Message from "./Message";

const ChatWindow = ({ messages, sender_id, receiver_id }) => {
  return (
    <div
      className="overflow-y-scroll mb-4"
      style={{
        backgroundColor: "white",
        height: "85vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {messages
        .filter(
          (message) =>
            (message.sender_id == sender_id &&
              message.receiver_id == receiver_id) ||
            (message.receiver_id == sender_id &&
              message.sender_id == receiver_id)
        )
        .map((message) => (
          <Message
            style={{
              flexDirection: "row",
              justifyContent: message.sender_id === sender_id ? "flex-end" : "flex-start",
            }}
            align={message.sender_id == sender_id ? "end" : ""} // or "start" depending on your requirement
            key={message.id}
            message={message}
          />
        ))}
    </div>
  );
};

export default ChatWindow;
