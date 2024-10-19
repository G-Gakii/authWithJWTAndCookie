import { Request, Response } from "express";
import User from "../model/user.model";
import bcrypt from "bcrypt";
import createSecretToken from "../tokenGenerator/generateToken";

const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    if (!req.body) {
      res.status(400).json({ message: "request body is required" });
      return;
    }
    const { name, username, email, password } = req.body;
    if (!(name && username && email && password)) {
      res
        .status(400)
        .json({ message: "username,name,email and password required" });
      return;
    }
    let existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      res.status(409).json({ message: "User already exist" });
      return;
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = new User({
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    const user = await newUser.save();
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      domain: "localhost",
      path: "/",
      expires: new Date(Date.now() + 86400000),
      secure: true,
      httpOnly: true,
      sameSite: "none",
    });
    console.log("cookie set successfully");
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: `Internal server error: ${error}` });
  }
};

export default createUser;
