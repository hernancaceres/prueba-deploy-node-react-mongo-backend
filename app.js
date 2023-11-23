
import express from "express";
import { indexRoutes } from "./routes/index.routes.js";
import { authRouter } from "./routes/auth.routes.js";
import { connectMongo } from "./database/db.js";
import { settingDotEnvPort } from "./config.js";


const app = express();
connectMongo();

app.use(express.json());
app.use("/", indexRoutes);
app.use("/api/", authRouter);

const { port } = settingDotEnvPort();

//servidor 
const PORT = port || 5000;
app.listen(PORT, () => {
  console.log(`SERVER corriendo en: http://localhost:${PORT}`);
});