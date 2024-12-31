import express from "express";
import { sendReservations } from "../controller/reservation.js";

const router = express.Router();

router.post("/send", sendReservations);

export default router;
