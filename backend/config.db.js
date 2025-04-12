import mongoose from "mongoose";

const connectDb=async()=>{
    mongoose.connect(process.env.MONGO_URI)
    .then(console.log("connect to bd"))
    .catch((error)=>{
        console.log("error in connection",error)
    })
}
export default connectDb