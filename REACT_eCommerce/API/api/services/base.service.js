const dbConfig = require('../configs/db.config');
const mysql = require('mysql');


class BaseService {
    constructor() {
        this.name = this.constructor.name.replace(`Service`, ``);
        this.table = this.name.toLowerCase();
    }


/****************************************** CONNEXION *****************************************/
    static connexion;
    static connect = () => {
        if (!BaseService.connexion) {
            BaseService.connexion = mysql.createPool({
                host: dbConfig.HOST,
                port: dbConfig.PORT,
                user: dbConfig.USER,
                password: dbConfig.PASS,
                database: dbConfig.NAME
            });
        }
        return BaseService.connexion;
    }


/****************************************** EXECUTE REQUEST *****************************************/
    static executeQuery = async (sql) => {
        const result =
            await new Promise((resolve, reject) => {
                BaseService.connect().query(sql, (err, rows) => {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(rows);
                });
            });
        return result;
    }


/****************************************** SELECT ALL *****************************************/
    getAll = async (params) => {
        let sql = `SELECT * FROM ${this.table} WHERE is_deleted = 0`;
        if (params?.where) {
            sql += ` AND (${params.where.replaceAll('&&', 'AND').replaceAll('||', 'OR')});`;
        }
        const rows = await BaseService.executeQuery(sql);
        return rows;
    }


// // /****************************************** SELECT ALL *****************************************/
//     getAllBy = async (param) => {
//         let sql = `SELECT * FROM ${this.table} WHERE ${param.where} AND deleted = 0`;
//         const rows = await BaseService.executeQuery(sql);
//         return rows;
//     }


/****************************************** SELECT ONE BY ID *****************************************/
    getOneById = async (id) => {
        const sql = `SELECT * FROM ${this.table} WHERE is_deleted = 0 AND id_${this.table}=${id}`;
        const rows = await BaseService.executeQuery(sql);
        const row = rows.length === 1 ? rows.pop() : null;
        return row;
    }


    getAllBy = async (param) => {
        const sql = `SELECT * FROM ${this.table} WHERE is_deleted = 0 AND ${param.where}`;
        // console.log(sql);
        const rows = await BaseService.executeQuery(sql);
        const row = rows.length === 1 ? rows.pop() : null;
        return row;
    }


// /****************************************** INSER ONE OR MANY *****************************************/
//     insert = async (params) => {
//         if(Array.isArray(params)) {
//             if (params.length === 0) return null;
//             const columns = Object.keys([...params].pop()).join(',');
//             let allValues = [];

//             params.forEach(object => {
//                 let values = Object.values(object);

//                 values = values.map((val) => {
//                     return (val = "'" + val.replaceAll(/'/g, "''") + "'");
//                 });

//                 values = values.join(",");
//                 allValues.push("(" + values + ")");
//             })

//             allValues = allValues.join(',');
//             const sql = `INSERT INTO ${this.table} (${columns}) VALUES ${allValues};`;
//             const result = await BaseService.executeQuery(sql);

//             if (result.affectedRows === params.length) {
//                 return await this.getAll({ where: `id >= ${result.insertId} && id < ${result.insertId + result.affectedRows}` });
//             }
//             return false;
//         }
//         else {
//             let key = '';
//             let value = '';

//             for (const item in params) {
//                 key += item + ",";
//                 value += `"${params[item]}"` + ',';
//             }

//             key = key.substring(0, (key.length - 1));
//             value = value.substring(0, (value.length - 1));

//             const sql = `INSERT INTO ${this.table} (${key}) VALUES (${value}) `;
//             const result = await BaseService.executeQuery(sql);
//             return result;
//         }
//     }


// /****************************************** UPDATE *****************************************/
//     update = async (params) => {
//         let where = params.where?.replaceAll('&&', 'AND').replaceAll('||', 'OR') || '1'; // remplace && et || de JS par AND et OR pour MYSQL
//         delete params.where;
//         let values = [];

//         for (const key in params) {
//             values.push(`${key}='${params[key].replaceAll(/'/g, "''")}'`); // remplace ' par "
//         }

//         values = values.join(',');
//         let sql = `UPDATE ${this.table} SET ${values} WHERE ${where}`;
//         const result = await BaseService.executeQuery(sql);
//         return result;
//     }


// /****************************************** HARD DELETE *****************************************/
//     delete = async (id) =>{
//         let sql = `DELETE FROM ${this.table} WHERE id=${id}`;
//         const result = await BaseService.executeQuery(sql);
//         return(result);
//     }







}

module.exports = BaseService;