import React from "react";
import Message from "./Message";

const ChatWindow = ({ messages }) => {
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
      {messages.map((message) => (
        <Message
          align="" // or "start" depending on your requirement
          key={message.id}
          message={message}
        />
      ))}
    </div>
  );
};

export default ChatWindow;
