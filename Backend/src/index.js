import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import connectDB from "./db/index.js";
import registerRoutes from "./routes/registerRoutes.js";
import loginRoutes from "./routes/loginRoutes.js";
dotenv.config({ path: "./.env" });

const app = express();

// Middlewares
app.use(cors()); // Allow requests from React frontend
app.use(express.json()); // Parse JSON bodies

// Routes
app.use("/api", registerRoutes);
app.use("/api", loginRoutes);
// Start Server
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is running on port ${process.env.PORT || 3000}`);
    });
  })
  .catch((error) => {
    console.error("MONGO DB Connection failed:", error);
  });
