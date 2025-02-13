import "./config/dbConnect.js"
import express from "express"
import { globalErrHandler } from "./middleware/globalErrHandler.js";
import { loginRoute } from "./controller/login.js";
import cors from "cors";

const app = express();
const port = 3000;

const corsOptions = {
    origin: "https://subtle-khapse-9de741.netlify.app",
    methods: ["GET","POST"],
    allowedHeaders: ['Content-Type']
}

app.use(cors(corsOptions));

app.use(express.json());


app.use("/api/insta",loginRoute);

app.use(globalErrHandler);

app.listen(port,() => {
    console.log("Server started");
});
