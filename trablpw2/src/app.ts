import fastify from 'fastify';
import { db } from './db'; 

const app = fastify({ logger: true });

const dbConfig = {
    host: 'localhost', 
    port: 5432, 
    database: 'mytrablpw', 
    user: 'user', 
    password: 'password'
  };


/*Rota para listar todos os estudantes */
app.get('/students', async (request, reply) => {
  try {
    const students = await db.any('SELECT * FROM students');
    reply.send(students);
  } catch (error) {
    reply.status(500).send({ error: 'Erro ao buscar estudantes' });
  }
});

const start = async () => {
  try {
    await app.listen(3000);
    app.log.info(`Servidor rodando em: ${app.server.address()}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();