import supabase from "../utils/supabase.js";
import express from "express";

const chatAppRouter = express.Router();

chatAppRouter.get("/messages", async (req, res) => {
  console.log("GET /messages");
  const { data, error } = await supabase
    .from("messages")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) return res.status(500).json({ error: error.message });
  var decodedData = res.json(data);
  console.log(data);
});

chatAppRouter.post("/messages", async (req, res) => {
  console.log(req.body);
  const { sender_id, receiver_id, text } = req.body;
  const { data, error } = await supabase
    .from("messages")
    .insert([{ receiver_id, sender_id, text }]);

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

export default chatAppRouter;
