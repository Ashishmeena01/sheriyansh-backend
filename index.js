import mongoose from "mongoose";

const connectDB = () =>{
    return new Promise(async (res, rej) => {
        try {
            console.log("started connecting...")
            await mongoose.connect('mongodb://localhost:27017/')

            console.log("database got connected succesfully");
            res();
        } catch (error) {
            rej(error);
        }
    });
}


export default connectDB;