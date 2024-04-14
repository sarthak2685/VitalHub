import mongoose from "mongoose";
import validator from "validators";


const messageschema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        minLength: [3,"first name must conatin at least 3 characters "]
    },
    lastName:{
        type: String,
        required: true,
        minLength: [3,"last name must conatin at least 3 characters "]
    },
    email:{
        type: String,
        required: true,
        validate:[validator.isemail, "please Provide a valid email"]
    },
    email:{
        type: String,
        required: true,
       minLength: [10,"phone must contain exact 10 digits"],
       maxLength: [10,"phone must contain exact 10 digits"]
    },
    message:{
        type: String,
        required: true,
        minLength: [10,"last name must conatin at least 10 characters "]
    },
});

export const message = mongoose.model("Message", messageschema);