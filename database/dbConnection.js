import mongoose from "mongoose";

export const dbConnection = ()=>{

  mongoose.connect(process.env.MONGODB_URI, {
    dbName: "resturentwebsite",
  })
  .then(()=>{
    console.log("connected to database successfully");
  })
  .catch((err) =>{
    console.log(`some error cooured while connecting to database! ${err}`);
  });

};