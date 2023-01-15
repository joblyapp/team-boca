import express from "express";
import { registrar, getPublicUser } from "../controllers/usuariosController.js"
import { confirmAcc } from "../controllers/usuariosController.js";
const router = express.Router();

router.post("/", registrar)
router.get("/:id", getPublicUser)
router.get("/confirm/:token", confirmAcc);


export default router;