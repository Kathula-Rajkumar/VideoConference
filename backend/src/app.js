import express from "express";
import {createServer } from "node:http";

import {Server } from "socket.io";

import mongoose from "mongoose";

import cors from "cors";
import userRoutes from "./routes/users.routes.js";



import connectToSocket from "./controllers/socketManager.js";

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port", (process.env.PORT || 8000));
app.use(cors());
app.use(express.json({limit: "40kb"}));
app.use(express.urlencoded({limit: "40kb", extended: true}));
app.use("/api/v1/user", userRoutes);


const start = async () => {
    app.set("mongo_user")
    const connectionDb = await mongoose.connect("mongodb+srv://rajkumarkathula15:rajkumar@zoomcluster.v6lgjzb.mongodb.net/");
    console.log(`MONGO connected DB Host: ${connectionDb.connection.host}`)
    server.listen(app.get("port"), () => {
        console.log("LISTENIN ON PORT 8000")
    });        

}
start();