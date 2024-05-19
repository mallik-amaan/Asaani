import React from "react";

const Message = ({ message, align }) => {
  return (
    <div
      className="message-container"
      style={{
        display: "flex",
        width: "30vw",
        borderRadius: "10px",
        margin: "10px",
        padding: "5px",
        backgroundColor: "#336DF2",
        flexDirection: "row",
        justifyContent: align === "end" ? "flex-end" : "flex-start",
      }}
    >
      <div className="message-content">
        <div className="flex items-center space-x-3">
          <img
            className="w-8 h-8 rounded-full"
            src="https://via.placeholder.com/40"
            alt="User avatar"
          />
          <div>
            <p className="text-sm font-semibold">{message.sender}</p>
            <p className="text-xs text-gray-500">{message.time}</p>
          </div>
        </div>
        <p className="mt-2 ml-11 text-gray-700">{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
