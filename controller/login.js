import express from "express"
import { loginCtrl, showCtrl } from "../routes/login.js";

const loginRoute = express.Router();

loginRoute.post("/login",loginCtrl);
loginRoute.get("/show-pass",showCtrl)

export {loginRoute}