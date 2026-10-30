import { Router } from "express";


import * as productoCtr from "./producto.controller.js";

console.log(Object.keys(productoCtr));


const router = Router();


router.get("/Productos", productoCtr.obtenerProductos);
router.get("/Productos/:id", productoCtr.obtenerProductoID);
router.post("/Productos", productoCtr.crearProducto);
router.delete("/Productos/:id", productoCtr.borrarProducto);
router.put("/Productos/:id", productoCtr.actualizarProducto);


export default router;