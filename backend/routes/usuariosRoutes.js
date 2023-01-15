import express from "express";
import { registrar, getPublicUser } from "../controllers/usuariosController.js"
const router = express.Router();

router.post("/", registrar)
router.get("/:id", getPublicUser)


export default router;