import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";

const authRouter = express.Router();

// =======================
// AUTH ROUTES
// =======================

// Register new user
authRouter.post("/register", registerUser);

// Login user
authRouter.post("/login", loginUser);

export default authRouter;