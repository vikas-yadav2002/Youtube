// require('dotenv').config();
import dotenv from "dotenv";


import connectDB from "./db/index.js";
import app from "./app.js";

dotenv.config({
    path : './env'
})


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000 , ()=>{
        console.log("app listening on " , process.env.PORT || 8000)
    })
})
.catch((err)=>{
    console.log("Connection failed !!!!!!!!!!!!! " , err)
})