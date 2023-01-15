import express from "express";
import conectarDb from "./config/db.js";
import dotenv from "dotenv"
import usuariosRoutes from "./routes/usuariosRoutes.js"
import BodyParser from "body-parser";
import cors from "cors"

const app = express();


 
app.use(cors())
app.use(express.json())
app.use(BodyParser.urlencoded({ extended: true }));

dotenv.config()
conectarDb()


app.use("/api/usuarios", usuariosRoutes)


const PORT = process.env.PORT || 4000

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})
