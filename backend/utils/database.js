
import dotenv from 'dotenv';
import pkg  from 'pg';
const {Pool} =pkg;


dotenv.config();

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE,
  password: process.env.POSTGRES_PASSWORD,
  port: 5432,
});


pool.connect()
  .then(client => {
    console.log('Connected to the database');
    client.release(); // Release the client back to the pool
  })
  .catch(err => console.error('Connection error', err.stack));

export default pool;
