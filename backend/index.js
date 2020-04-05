const express = require ('express');
const cors = require ('cors');
const routes = require('./src/routes');

const app = express();



app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);

/**
 * Rotas e recursos

 */

/**
 * 
 * Metodos Http: 
 * GET: Buscar uma informação do back-end
 * POST : Criar uma informação no back-end
 * PUT: alterar uma informação do back-end
 * DLETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros
 * 
 * Query Params: parâmetros nomeados enviados na rota apos "?" (filtros e paginação)
 * Route Param : Parâmetros utilizados para identificar recursos
 * Request body: corpo da requisição, utilizado para criar ou alterar recursos.
 */

 /**
  * SQL: MYSQL, SQLite, PostgreSQL, ORACLE, Microsoft SQL server
  * NoSQL: MongoDB, CouchDB e etc.
  * 
  */
 /**
  * Driver : SELECT * FROM user
  * Query Builder : table ('users').select('*').where ()
  */




