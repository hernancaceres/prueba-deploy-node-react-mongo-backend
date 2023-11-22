
import express from "express";
import { indexRoutes } from "./routes/index.routes.js";
const app = express();
import { settingDotEnv } from "./config.js";

const { port } = settingDotEnv();


app.use(express.json());
app.use("/", indexRoutes);

//servidor 
const PORT = port || 5000;
app.listen(PORT, () => {
    console.log(`SERVER corriendo en: http://localhost:${PORT}`);
});