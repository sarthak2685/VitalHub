import mongoose from "mongoose";

export const dbconnection = ()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName: "VITALHUB",
    })
    .then(()=>{
        console.log("connected to db");
    })
    .catch((err)=>{
        console.log(`some error:${err}`);
    });
}