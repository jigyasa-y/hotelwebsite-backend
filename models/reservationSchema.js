import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
  firstName:{
    type:String,
    required:true,
    minlenght:[3, "First name must contain at least 3 character"],
    maxlength:[30, "First name cannot exced 30 character!"],
  },
  lastName:{
    type:String,
    required:true,
    minlenght:[3, "last name must contain at least 3 character"],
    maxlength:[30, "First name cannot exced 30 character!"],
  },
  email:{
    type:String,
    required:true,
   validate:[validator.isEmail, "provide a valid email"],
  },
  phone:{
    type:String,
    required:true,
    minlenght:[9, "phone number must contain at least 9 digit"],
    maxlength:[10, "phone number cannot exced 11 digit!"],
  },
  time:{
    type:String,
    required:true,

  },
  date:{
    type: String,
    required:true,
  },
  
});

export const Reservation=mongoose.model("Reservation", reservationSchema)