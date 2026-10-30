import db from "../../config/dbconexion.js";


export const UserModel = {
  listarTodos: async () => {
    const sql = "SELECT * FROM usuarios ORDER BY apellidos";
    //almacenamos la respuesta en un arreglo
    const [rows] = await db.query(sql);
    return rows;
  },
  findById: async (id) => {
    const sql = "SELECT * FROM usuario WHERE id_usuario=?";
    //almacenamos la respuesta en un arreglo
    const [rows] = await db.query(sql, [id]);
    return rows;
  },
};
