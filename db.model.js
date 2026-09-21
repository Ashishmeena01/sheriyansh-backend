import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const taskSchema = new mongoose.Schema({
    title: String,
    description: String,
    userid:mongoose.Schema.ObjectId
})


const User = mongoose.model("user",userSchema);
const Task = mongoose.model("task",taskSchema);

export {User,Task};