import mariadb from 'mariadb';

export const pool = mariadb.createPool({
  database: 'prueba',
  username: 'candidatoPrueba',
  password: 'gaspre21.M',
  host: 'precios-1.c0f6dm2ucnlg.us-east-2.rds.amazonaws.com',
  port: 3306,
});