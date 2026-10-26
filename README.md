# paso a paso

- Verificar version de node: "node -v"
- Inicializar el proyecto: "npm init"
- Crea el package.json
- agrergar "type": "module", para poder implementar modules de es6

- paquetes basicos: npm i nodemon cors express mysql2.
    - nodemon: solo para desarrollar! sirve para cambiar el codigo y que se actualice automaticamente.
    - cors: setear la seguridad de interactuar con direcciones IP diferentes.
    - express: framework de JS, crea un servidor rest (post, get, put, delete).
    - mysql2: libreria que permite hacer consultas SQL desde NODEJS.

    - Cambiamos la seccion script en package.json, así:
        "dev": "nodemon index.js",
        "start": "node index.js",
        con el fin de tener dos scripts de ejecucion, uno de desarrollo y uno de despliegue.