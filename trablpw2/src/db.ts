import * as pgPromise from 'pg-promise';

const pgp = pgPromise();

// Configurações da conexão com o banco de dados PostgreSQL
const dbConfig = {
  host: 'localhost', 
  port: 5432, 
  database: 'mytrablpw', 
  user: 'user', 
  password: 'password'
};

const db = pgp(dbConfig);

export { db };