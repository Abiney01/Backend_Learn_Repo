import mongoose from "mongoose";
const connectDB = async(databaseURL)=>{
    try {
        await mongoose.connect(databaseURL)
        console.log("Database connected successfully..")
    } catch (error) {
        console.log(error)
    }
}
export default connectDB