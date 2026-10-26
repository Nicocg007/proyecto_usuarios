import { Router } from "express";


import * as usuarioCtr from "./usuario.controller.js";


const router = Router();


router.get("/usuarios", usuarioCtr.obtenerUsuarios);


export default router;
