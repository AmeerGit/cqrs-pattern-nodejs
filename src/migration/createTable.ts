import {pool} from '../db/db';

const createUsersTable = async () => {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100),
        email VARCHAR(100) UNIQUE NOT NULL,
        password VARCHAR(100) NOT NULL
      );
    `;
    await client.query(createTableQuery);
    await client.query('COMMIT');
    console.log('Table "users" created successfully');
  } catch (e) {
    await client.query('ROLLBACK');
    console.error('Error creating table', e);
  } finally {
    client.release();
  }
};

export { createUsersTable };