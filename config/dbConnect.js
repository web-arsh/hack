import mongoose from "mongoose";

const dbConnect = async () => {
    try {
        await mongoose.connect(
            process.env.MONGO_URL,
            {dbName:"Insta-Pass"}
        );
        console.log("Database connected");
        
        
    } catch (error) {
        console.log(error);
    }
}

dbConnect();