import mongoose from "mongoose";

const connectDb=async()=>{
    mongoose.connect("mongodb://127.0.0.1:27017/Anti-resume")
    .then(console.log("connect to bd"))
    .catch((error)=>{
        console.log("error in connection")
    })
}
export default connectDb