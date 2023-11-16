import fastify from 'fastify';
import fastifyPostgres from 'fastify-postgres';

// Configurações do banco
const app = fastify();
app.register(fastifyPostgres, {
  connectionString: 'postgresql://seu-usuario:senha@localhost:5432/bd_company', // Altere conforme suas configurações
});

// Definição das tabelas e campos
app.get('/create-tables', async (request, reply) => {
  const client = await app.pg.connect();
  try {
    
    await client.query(`
        CREATE TABLE group (
            id SERIAL PRIMARY KEY,
            group_type VARCHAR(10) NOT NULL CHECK (group_type IN ('pc', 'kg', 'Veic', 'pla')),
            group_name VARCHAR(255) NOT NULL
        );
    `);

    await client.query(`
        CREATE TABLE storage (
            id SERIAL PRIMARY KEY,
            storage_code VARCHAR(10) NOT NULL,
            storage_name VARCHAR(255) NOT NULL
        );
    `);

    await client.query(`
        CREATE TABLE products (
            id SERIAL PRIMARY KEY,
            product_name VARCHAR(255) NOT NULL,
            product_type VARCHAR(2) NOT NULL CHECK (product_type IN ('MP', 'PA', 'PI', 'PV', 'SC', 'SV')),
            storage_name VARCHAR(255) REFERENCES storage(storage_name)
        );
    `);

    reply.send({ message: 'Tabelas criadas com sucesso!' });
  } catch (error) {
    reply.status(500).send({ error: 'Erro ao criar tabelas' });
  } finally {
    client.release();
  }
});

const start = async () => {
  try {
    await app.listen(3000);
    console.log('Servidor rodando em http://localhost:3000');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();