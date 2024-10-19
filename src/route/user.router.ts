import { Request, Response } from "express";
import express from "express";
import logIn from "../controller/login";
import createUser from "../controller/signup";

const router = express.Router();

router.post("/signup", createUser);
router.post("/login", logIn);
router.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out" });
});

export default router;
