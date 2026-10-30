import { Router } from "express";


import * as usuarioCtr from "./usuario.controller.js";


const router = Router();


router.get("/usuarios", usuarioCtr.obtenerUsuarios);
router.get("/usuarios/:id", usuarioCtr.obtenerUsuarioId);


export default router;
