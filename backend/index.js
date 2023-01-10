import express from "express";
import conectarDb from "./config/db.js";
import dotenv from "dotenv"
const app = express();

app.use(express.json())

dotenv.config()
conectarDb()

const PORT = process.env.PORT || 4000

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})