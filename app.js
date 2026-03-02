import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConnection.js";
import ErrorHandler from "./error/error.js";
import reservationRoute from "./routes/reservationRoute.js"



const app=express();
dotenv.config({path: "./config/config.env"});
app.use(cors({
  origin: [https://hotelwebsite-5z8y7g6yg-jigyasas-projects-b6074222.vercel.app],
  methods: ["POST"],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/api/v1/reservation", reservationRoute);

dbConnection();
// app.use(errormiddleware);

export default app;
