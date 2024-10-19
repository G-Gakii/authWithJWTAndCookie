import mongoose, { Schema, Document } from "mongoose";

interface IUser extends Document {
  _id: string;
  name: string;
  username: string;
  email: string;
  password: string;
}

const userSchema: Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});
const User = mongoose.model<IUser>("User", userSchema);

export default User;
