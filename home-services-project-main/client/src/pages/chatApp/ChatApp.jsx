import React, { useState, useEffect } from "react";
import axios from "axios";
import { createClient } from "@supabase/supabase-js";
import ChatWindow from "./ChatWindow";
import ChatInput from "./ChatInput";

const supabaseUrl = "https://zvvtojeuspirvypkehal.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp2dnRvamV1c3BpcnZ5cGtlaGFsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU3MDkzNDcsImV4cCI6MjAzMTI4NTM0N30.Wds1JxZh-zF_CuhcKCLVdMoS7MpE_V_h8Df4MdpVS3o";
const supabase = createClient(supabaseUrl, supabaseKey);

const ChatApp = ({s_id,r_id}) => {
  const [messages, setMessages] = useState([]);
  const sender_id = s_id;
  const receiver_id = r_id;
  useEffect(() => {
    const fetchMessages = async () => {
      const response = await axios.get(
        "http://localhost:4000/chatapp/messages"
      );
      setMessages(response.data);
    };
    fetchMessages();

    const newMessages = supabase
      .channel("custom-all-channel")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "messages" },
        (payload) => {
          messages.push(payload.new);
        }
      )
      .subscribe();
    fetchMessages();
  }, []);

  const sendMessage = async (message) => {
    console.log("entered sen message");
    const response = await axios.post(
      "http://localhost:4000/chatapp/messages",
      {
        sender_id: sender_id,
        receiver_id: receiver_id,
        text: message,
      }
    );
    console.log("message response sent");
    if (response.error) {
      console.error(response.error);
    } else {
      console.log("entered else block");
      const fetchMessages = async () => {
        console.log("fetching messages");
        const response = await axios.get(
          "http://localhost:4000/chatapp/messages"
        );
        setMessages(response.data);
        console.log(messages);
      };
      fetchMessages();
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h3>Chat </h3>
      <ChatWindow messages={messages} />
      <ChatInput sendMessage={sendMessage} />
    </div>
  );
};

export default ChatApp;
