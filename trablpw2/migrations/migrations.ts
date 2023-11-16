import { Client } from 'pg';
import { readFileSync } from 'fs';

async function runMigrations() {
    
    const dbConfig = {
        host: 'localhost', 
        port: 5432, 
        database: 'mytrablpw', 
        user: 'user', 
        password: 'password'
    };

  const client = new Client(dbConfig);

  try {
    await client.connect();

    
    const migrationSql = readFileSync('./migrations/001_create_tables.sql', 'utf8');

    
    await client.query(migrationSql);

    console.log('Migrações concluídas com sucesso');
  } catch (error) {
    console.error('Erro ao executar migrações:', error);
  } finally {
    await client.end();
  }
}

runMigrations();