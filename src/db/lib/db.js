import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

// Open the SQLite database
export const getDatabase = async () => {
  return open({
    filename: './src/db/dua_main.sqlite',
    driver: sqlite3.Database,
  });
};

// Fetch categories from the database
export const getCategories = async () => {
  const db = await getDatabase();
  const rows = await db.all('SELECT * FROM category');
  return rows;
};
