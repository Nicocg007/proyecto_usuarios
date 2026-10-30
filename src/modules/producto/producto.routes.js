import { Router } from "express";


import * as productoCtr from "./producto.controller.js";

console.log(Object.keys(productoCtr));


const router = Router();

/*
router.get("/usuarios", usuarioCtr.obtenerUsuarios);
router.get("/usuarios/:id", usuarioCtr.obtenerUsuarioID);
router.post("/usuarios", usuarioCtr.crearUsuario);
router.delete("/usuarios/:id", usuarioCtr.borrarUsuario);
router.put("/usuarios/:id", usuarioCtr.actualizarUsuario);
*/

export default router;