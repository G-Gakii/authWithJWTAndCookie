import { Request, Response } from "express";
import bcrypt from "bcrypt";
import createSecretToken from "../tokenGenerator/generateToken";
import "dotenv/config";
import User from "../model/user.model";

const logIn = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    if (!(email && password)) {
      res.status(400).json({ message: "All fields are required" });
      return;
    }
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(404).json({ message: "invalid credentials" });
      return;
    }
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      domain: "localhost",
      path: "/",
      expires: new Date(Date.now() + 86400000),
      secure: true,
      httpOnly: true,
      sameSite: "none",
    });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: `Internal server error: ${error}` });
  }
};
export default logIn;
