
import express from "express";
const app = express();
import { settingDotEnv } from "./config.js";

const { port } = settingDotEnv();


app.use(express.json());


//servidor 
const PORT = port || 5000;
app.listen(PORT, () => {
    console.log(`SERVER corriendo en: http://localhost:${PORT}`);
});