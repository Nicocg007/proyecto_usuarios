import { UserModel } from "./usuario.model.js";


export const obtenerUsuarios = async (req, res) => {
  try {
    const results = await UserModel.listarTodos();
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      status: "error",
      error: `error al listar : ${error}`,
    });
  }
};
export const obtenerUsuarioID = async (req, res) => {
  // codigo protegido con try..catch
  try {
    const results = await UserModel.findById(req.params.id);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: `error al listar : ${error}`,
    });
  }
};

export const crearUsuario = async (req, res) => {
const datos = {
nombre: req.body.nombre,
apellidos: req.body.apellidos,
email: req.body.email,
telefono: req.body.telefono,
ciudad: req.body.ciudad,
estado: req.body.estado,
password: req.body.password,
};
try {
const results = await UserModel.create(datos);
res.json({ results });
} catch (error) {
res.status(500).json({
error: `ocurrió un error en la insercion:${error}`,
});
}
};