import express from "express";
import dotenv from "dotenv";
import connectToMongoDB from "./DB/Connect_To_MongoDB.js";
import authRoutes from "./routes/auth_Routes.js";

const app = express();

dotenv.config();

const PORT = process.env.PORT || 5000;

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`server Running On Port ${PORT}`);
});
