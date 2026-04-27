import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import authRouter from "./routes/authRoutes.js";

import connectDB from './configs/mongodb.js';
import connectCloudinary from './configs/cloudinary.js';

import userRouter from './routes/userRoutes.js';
import educatorRouter from './routes/educatorRoutes.js';
import courseRouter from './routes/courseRoute.js';

import { stripeWebhooks } from './controllers/webhooks.js';
import adminRouter from './routes/adminRoute.js';

// Initialize Express
const app = express();

// Connect DB
await connectDB();
await connectCloudinary();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => res.send("API Working"));

// Stripe webhook (keep)
app.post('/stripe', express.raw({ type: 'application/json' }), stripeWebhooks);

// API routes
app.use('/api/educator', educatorRouter);
app.use('/api/course', courseRouter);
app.use('/api/user', userRouter);
app.use("/api/auth", authRouter);
app.use('/api/admin', adminRouter);

// Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});