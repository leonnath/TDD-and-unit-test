/*
* Conexión a MySQL
 */

import mysql from 'mysql';
import IndexController from "./indexController";

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'cursotest',
    password: 'L@ion2903',
    database: 'todos',
    port: 3306,
});
connection.connect((err) => {
    if (err) throw err;
    console.log('Connectado!');
});
export default connection;

