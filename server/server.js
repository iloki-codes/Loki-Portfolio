import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import contactRouter from "./routes/contact.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors({
    origin: ["http://localhost:5173", "https://loki-portfolio.onrender.com"]
}));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URL, {}).then(() => {
    console.log("Database conected successfully");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch((error) => console.error("DB Connection error", error));


app.get("/", (req, res) => {
    res.send("API working with /api/v1");
})

//routes

app.use("/api/v1/contact", contactRouter);