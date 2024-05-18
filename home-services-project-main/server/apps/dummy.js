import { Router } from "express";
import supabase from "../utils/supabase.js";
import multer from "multer";
import { protect } from "../middlewares/protects.js";



const dummyRouter = Router();
dummyRouter.use(protect);
const upload = multer();

dummyRouter.get("/", async (req, res) => {
    try {
      const categorydata = await supabase.from("promotion").select("*");

      return res.json(categorydata)
    } catch (error) {
      res.status(500).json({
        error: error,
      });
    }
  });
  
export default dummyRouter;   