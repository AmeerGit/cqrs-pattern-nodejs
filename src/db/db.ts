import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'cqrs-db',
  password: 'postgres',
  port: 5432,
  idleTimeoutMillis: 300,
});

export {pool};