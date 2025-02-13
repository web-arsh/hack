import mongoose from "mongoose";

const loginSchema = mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
},{
    timestamps: true
});

const Login = mongoose.model("Login",loginSchema);

export {Login}