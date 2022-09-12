import dotenv from 'dotenv';

dotenv.config();

let db = {
  db: process.env.MYSQL_DB as string,
  user: process.env.MYSQL_USER as string,
  password: process.env.MYSQL_PASSWORD as string,
  port: process.env.MYSQL_PORT as string
}

if (process.env.NODE_ENV === 'test') {
  db = {
    db: process.env.MYSQL_TEST_DB as string,
    user: process.env.MYSQL_TEST_USER as string,
    password: process.env.MYSQL_TEST_PASSWORD as string,
    port: process.env.MYSQL_TEST_PORT as string
  }
}

export default db;