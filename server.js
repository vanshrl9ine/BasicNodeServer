import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import connectToMongoDB from './db/connectToMongoDB.js';
import authRoutes from './routes/auth.routes.js';
dotenv.config();
const app=express();


const port=process.env.PORT || 5000;

app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.get('/',(req,res)=>{
    res.send('hello world');
})
app.listen(port,()=>{
    connectToMongoDB();
    console.log(`http://localhost:${port}`);
})