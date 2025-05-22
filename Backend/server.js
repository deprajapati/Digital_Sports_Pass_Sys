import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import registerRoutes from "./src/routes/registerRoutes.js";

dotenv.config();

const app = express();

app.use(cors({
  origin: 'http://localhost:3001',  // your React app origin
}));

app.use(express.json());

app.use("/api", registerRoutes);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`✅ Server running on port ${process.env.PORT || 3000}`);
    });
  })
  .catch((err) => {
    console.error("❌ DB Connection Failed:", err);
  });
