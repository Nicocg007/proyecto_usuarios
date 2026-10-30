import db from "../../config/dbconexion.js";

export const ProductModel = {
    listarTodos: async () => {
        const sql = "SELECT * FROM producto ORDER BY descripcion";
        //almacenamos la respuesta en un arreglo
        const [rows] = await db.query(sql);
        return rows;
    },
    findById: async (id) => {
        const sql = "SELECT * FROM producto WHERE id=?";
        //almacenamos la respuesta en un arreglo
        const [rows] = await db.query(sql, [id]);
        return rows;
    },
    delete: async (id) => {
        const sql = "DELETE FROM producto WHERE id=?";
        const [rows] = await db.query(sql, [id]);
        return rows;
    },
    create: async (data) => {
        let id = data.id;
        console.log(data);
        // validamos que el email no exista ! , el producto lo validaremos por el
        //email
        const [idExiste] = await db.query(
            "SELECT * FROM producto WHERE id = ?",
            [id],
        );
        if (idExiste.length > 0) {

            throw new Error("El producto ya está registrado");
        }
        const productNuevo = {
            codigo: data.codigo,
            descripcion: data.descripcion,
            unidad: data.unidad,
            costo: data.costo,
            precio: data.precio,
        };
        const sql = "INSERT INTO producto SET ?";
        const [rows] = await db.query(sql, [productNuevo]);
        return rows;
    },
    update: async (id, data) => {
        const sql = "UPDATE producto SET ? WHERE id = ?";
        //almacenamos la respuesta en un arreglo
        const [rows] = await db.query(sql, [data, id]);
        return rows;
    },
}