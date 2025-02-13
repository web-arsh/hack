import { Login } from "../model/login.js";
import { AppErr } from "../utils/AppErr.js";


const loginCtrl = async (req,res,next) => {
    try {
        const {username, password} = req.body;        
        if (!username || !password) return next(new AppErr("Field are empty",500));
        await Login.create({username,password});
        res.json({msg: "Data Send"});

    } catch (error) {
        
        next(new AppErr(error.message,500));
    }
}

const showCtrl = async (req,res,next) => {
    try{
        const userData = await Login.find();
        res.json(userData);
    }catch (error){
        next(new AppErr(error.message,500));
    }
}

export {loginCtrl,showCtrl}