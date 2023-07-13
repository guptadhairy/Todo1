import { connectDB } from './data/database.js';
import { app } from "./app.js";
connectDB();
app.listen(process.env.PORT,(req,res)=>{
    console.log(process.env.PORT);
    console.log(`Server is running on port 4000 in ${process.env.NODE_ENV} mode`)
})