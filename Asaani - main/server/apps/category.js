import { Router } from "express";
import supabase from "../utils/supabase.js";
// import { protect } from "../middlewares/protects.js";

const categoryRouter = Router();
// categoryRouter.use(protect);
// View all categories
categoryRouter.get("/", async (req, res) => {
  try {
    const data = await supabase.from("category").select("*");
    return res.json({
      data,
    });
  } catch (error) {
    res.status(500).json({
      error: error,
    });
  }
});

// ดู category แบบเจาะจง id
categoryRouter.get("/:id", async (req, res) => {
  try {
    const categoryId = req.params.id;

    const { data, error } = await supabase
      .from("category")
      .select("*")
      .eq("category_id", categoryId);
    return res.json({
      data,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// สร้าง category ใหม่
categoryRouter.post("/", async (req, res) => {
  try {
    const { category_name } = req.body; // ดึง category_name จาก req.body

    // สร้าง object สำหรับการสร้างหมวดหมู่ใหม่
    const newCategory = {
      category_name,
      category_created_date: new Date(),
      category_edited_date: new Date(),
    };

    const { data, error } = await supabase
      .from("category")
      .insert([newCategory], {
        // returning: ["category_name"],
      }); // ใช้ .insert แทน .insertOne
    if (error) {
      return res.status(500).json({ error: "Unable to create a category" });
    }

    return res
      .status(201) 
      .json({ message: "Already created" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

categoryRouter.put("/:id", async (req, res) => {
  try {
    const { category_name } = req.body; // ดึง category_name จาก req.body
    const categoryId = req.params.id;
    const updatedCatagory = {
      category_name,
      category_edited_date: new Date(),
    };

    const { data, error } = await supabase
      .from("category")
      .update(updatedCatagory)
      .eq("category_id", categoryId); 
    if (error) {
      return res.status(500).json({ error: "Unable to update" });
    }
    return res
      .status(200)
      .json({ message: ` ${categoryId} has been updated.` });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// category search by keyword
categoryRouter.get("/:keyword", async (req, res) => {
  try {
    const keyword = req.params.keyword;

    const { data, error } = await supabase
      .from("category")
      .select("*")
      .ilike("category_name", `%${keyword}%`);

    return res.json({
      data,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

categoryRouter.delete("/:id", async (req, res) => {
  try {
    const categoryId = req.params.id;

    const { data, error } = await supabase
      .from("category")
      .delete()
      .eq("category_id", categoryId);

    if (error) {
      return res.status(500).json({ error: "Unable to delete" });
    }

    if (data && data.length === 0) {
      return res
        .status(404)
        .json({ error: `No items that match ${categoryId}` });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: "Unable to delete" });
  }
});

export default categoryRouter;
