import mongoose from "mongoose";

export const connectDB = ()=>{
    
mongoose.connect(process.env.MONGO_URI,{
    dbName: 'backendapi',
}).then((c)=>{console.log(`Database is connected successfully with ${c.connection.host}`)}).catch((e)=>{console.log(e)});
}