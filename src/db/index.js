import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import { exit } from 'node:process';
import { error } from "node:console";
const connectDB = async()=>{
try {
    const connectionDatabase = await mongoose.connect(`${process.env.MANGOBD_URL}/${DB_NAME}`)
    console.log("MongoBD connected succesfully " , (connectionDatabase.connection.host));
    
} catch (error) {
    console.log("Failed to connect database : " ,error)
    process.exit(1)
}
}

export default connectDB;