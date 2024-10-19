import express, { Request, Response } from "express";
import "dotenv/config";
import connectDB from "./database/db";
import authRoute from "./route/user.router";
import bodyparser from "body-parser";
import cookieparser from "cookie-parser";
const app = express();
const port = process.env.PORT || 3001;

// middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cookieparser());
// middleware for router
app.use("/api/user", authRoute);

app.use((req, res, next) => {
  // Set CORS headers
  res.header("Access-Control-Allow-Origin", process.env.FRONTEND_URL); // Replace with your frontend domain
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", "true"); // Allow credentials (cookies, etc.)

  // Pass to next layer of middleware
  next();
});

app.listen(port, () => {
  connectDB();
  console.log(`listening at port ${port}`);
});
