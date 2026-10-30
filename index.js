import express from "express";
import cors from "cors";
import usuarioRoutes from "./src/modules/usuario/usuario.routes.js";
import productoRoutes from "./src/modules/producto/producto.routes.js"


const app = express();
const PORT = 4100;


// Middlewares
app.use(express.json()); // Para que el servidor entienda JSON en el body
app.use(cors());


app.use("/api", usuarioRoutes);
app.listen(PORT, () => {
  console.log(`Server iniciado en : http://localhost:${PORT}`);
});


app.use("/api", productoRoutes);
app.listen(PORT, () => {
  console.log(`Server iniciado en : http://localhost:${PORT}`);
});
