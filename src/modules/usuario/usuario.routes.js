import { Router } from "express";


import * as usuarioCtr from "./usuario.controller.js";

console.log(Object.keys(usuarioCtr));


const router = Router();


router.get("/usuarios", usuarioCtr.obtenerUsuarios);
router.get("/usuarios/:id", usuarioCtr.obtenerUsuarioID);


export default router;
