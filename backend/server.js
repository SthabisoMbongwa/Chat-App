import express from "express";
import dotenv from "dotenv";
import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import cookieParser from "cookie-parser";
import connectToMongoDB from "./db/connectToMongoDB.js";


const app = express();
const PORT = process.env.PORT || 5000; 


dotenv.config();

app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser()); 

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);


// app.get("/", (req, res) => {
//     res.send("Hello world");
// })


app.listen(PORT, () => {
    connectToMongoDB();
    console.log("Server is running on port ", `${PORT}`);
});