
import express from "express";
import { indexRoutes } from "./routes/index.routes.js";
import { connectMongo } from "./database/db.js";

export const app = express();
connectMongo();

app.use(express.json());
app.use("/", indexRoutes);

