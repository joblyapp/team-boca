import express from "express";
import { registrar, login, getPublicUser, confirmAcc, olvidePassword, comprobarToken, nuevoPassword} from "../controllers/usuariosController.js"
const router = express.Router();

router.post("/", registrar)
router.post("/login", login)
router.get("/:id", getPublicUser)
router.get("/confirm/:token", confirmAcc);
router.post("/olvide-password", olvidePassword)
router.route("/olvide-password/:token").get(comprobarToken).post(nuevoPassword)

export default router;