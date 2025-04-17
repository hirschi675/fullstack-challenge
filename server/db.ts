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
      account_id INTEGER,
      organization_id INTEGER,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (organization_id) REFERENCES organizations(id),
      FOREIGN KEY (account_id) REFERENCES accounts(id)
    );
  `).run();

  db.prepare(`INSERT INTO organizations (id, name) VALUES (?, ?)`).run(1, 'Lakers');
  db.prepare(`INSERT INTO organizations (id, name) VALUES (?, ?)`).run(2, 'BYU');

  db.prepare(`
    INSERT INTO accounts (id, name)
    VALUES (?, ?)
  `).run(1, 'Coca Cola');

  db.prepare(`
    INSERT INTO accounts (id, name)
    VALUES (?, ?)
  `).run(2, 'Nike');

  db.prepare(`
    INSERT INTO accounts (id, name)
    VALUES (?, ?)
  `).run(3, 'McDonalds');

  db.prepare(`
    INSERT INTO accounts (id, name)
    VALUES (?, ?)
  `).run(4, 'Walmart');

  db.prepare(`
    INSERT INTO deals (id, name, start_date, end_date, value, status, account_id, organization_id)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `).run(1, 'Lakers n Coca Cola', '2025-04-12', '2026-04-12', 200, 1, 1, 1);

  db.prepare(`
    INSERT INTO deals (id, name, start_date, end_date, value, status, account_id, organization_id)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `).run(2, 'Lakers n Nike', '2025-04-13', '2026-04-13', 600, 1, 1, 2);

  db.prepare(`
    INSERT INTO deals (id, name, start_date, end_date, value, status, account_id, organization_id)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `).run(3, 'BYU n Walmart', '2025-04-25', '2025-06-12', 100, 1, 2, 4);

  return db;
}

export default initializeDatabase;