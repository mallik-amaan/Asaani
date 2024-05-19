import { Router } from "express";
import supabase from "../utils/supabase.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"; // npm install jsonwebtoken

const addDetailsRouter = Router();

addDetailsRouter.post("/add", async (req, res) => {
  const user = {
    fullName: req.body.service,
    phoneNumber: req.body.experience,
    email: req.body.expertise,
  };
  console.log("Received data from frontend:", user);
  try {
    // Log the data
    const { data, error } = await supabase
      .from("serviceman_detail")
      .insert([
        {
          serviceman_detail_id: 3,
          service_name: user.fullName,
          serviceman_experience: user.phoneNumber,
          serviceman_expertise: user.email,
        },
      ])
      .select();

    if (error) {
      return res.status(500).json({ error: "Failed to register user." });
    }

    // Log the data
    console.log("User data after registration:", data);

    return res.json({
      message: "Your details has been successfully added",
    });
  } catch (err) {
    console.error("Error while adding details:", err);
    return res.status(500).json({ error: "Failed to add details." });
  }
});

export default addDetailsRouter;
