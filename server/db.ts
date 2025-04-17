import Database from "better-sqlite3";

function initializeDatabase() {
  const db = new Database("./database.sqlite", { verbose: console.log });
  db.pragma("foreign_keys = ON");

  db.prepare(`
    CREATE TABLE IF NOT EXISTS organizations (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `).run();

  db.prepare(`
    CREATE TABLE IF NOT EXISTS accounts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `).run();

  db.prepare(`
    CREATE TABLE IF NOT EXISTS deals (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      start_date DATETIME DEFAULT CURRENT_TIMESTAMP,
      end_date DATETIME DEFAULT CURRENT_TIMESTAMP,
      value INTEGER NOT NULL,
      status BOOL NOT NULL,
      organization_id INTEGER,
      account_id INTEGER,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (organization_id) REFERENCES organizations(id),
      FOREIGN KEY (account_id) REFERENCES accounts(id)
    );
  `).run();

  return db;
}

export default initializeDatabase;