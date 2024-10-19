import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL as string);
    console.log("connected");
  } catch (error) {
    console.log("failed to connect to database:", error);
  }
};
export default connectDB;
