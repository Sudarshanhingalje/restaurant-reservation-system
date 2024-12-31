import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { errorMiddleware } from "./middlewares/error.js";
import reservationRouter from "./routes/reservationRoute.js"; // Adjusted import
import { dbConnection } from "./database/dbConnection.js";

const app = express();
dotenv.config({ path: ".Config/config.env"});

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/v1/reservation", reservationRouter);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Hello World Again!",
  });
});

// Database connection
dbConnection();

// Error middleware
app.use(errorMiddleware);

export default app;
