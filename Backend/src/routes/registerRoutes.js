import express from "express";
import { Register } from "../models/register.model.js";

const router = express.Router();

// ✅ POST: Register a new member
router.post("/register", async (req, res) => {
  try {
    const {
      fullName,
      age,
      gender,
      phone,
      address,
      sport,
      fees_paid,
      joined_date,
    } = req.body;

    const newUser = new Register({
      fullName,
      age,
      gender,
      phone,
      address,
      sport,
      fees_paid,
      joined_date, // optional - default used if not provided
    });

    await newUser.save();

    res.status(201).json({ success: true, message: "User registered successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error registering user", error });
  }
});

// ✅ GET: Fetch all members
router.get("/members", async (req, res) => {
  try {
    const members = await Register.find().sort({ createdAt: -1 });
    res.json({ success: true, members });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch members", error });
  }
});

// ✅ PUT: Update a member by ID
router.put("/members/:id", async (req, res) => {
  try {
    const updated = await Register.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) {
      return res.status(404).json({ success: false, message: "Member not found" });
    }
    res.json({ success: true, message: "Member updated", updated });
  } catch (error) {
    res.status(500).json({ success: false, message: "Update failed", error });
  }
});

// ✅ DELETE: Remove a member by ID
router.delete("/members/:id", async (req, res) => {
  try {
    const deleted = await Register.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: "Member not found" });
    }
    res.json({ success: true, message: "Member deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Delete failed", error });
  }
});

export default router;
