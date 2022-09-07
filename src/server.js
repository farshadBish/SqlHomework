import  express from "express";
import cors from "cors"
import { connectDB } from "./db/index.js";

const server = express()

const port = process.env.PORT || 5001

server.use(cors())
server.use(express.json())

server.listen(port, async()=>{
    console.log("sever is running on port : ", port);
    await connectDB()
})

server.on("error",(error)=>console.log("server is crashed due ",error))
