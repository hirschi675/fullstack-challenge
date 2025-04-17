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
      org_id INTEGER,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (org_id) REFERENCES organizations(id),
      FOREIGN KEY (account_id) REFERENCES accounts(id)
    );
  `).run();

  db.prepare(`INSERT OR IGNORE INTO organizations (id, name) VALUES (?, ?)`).run(1, 'Lakers');
  db.prepare(`INSERT OR IGNORE INTO organizations (id, name) VALUES (?, ?)`).run(2, 'BYU');
  db.prepare(`INSERT OR IGNORE INTO organizations (id, name) VALUES (?, ?)`).run(3, 'Utah Jazz');

  db.prepare(`INSERT OR IGNORE INTO accounts (id, name) VALUES (?, ?)`).run(1, 'Coca Cola');
  db.prepare(`INSERT OR IGNORE INTO accounts (id, name) VALUES (?, ?)`).run(2, 'Nike');
  db.prepare(`INSERT OR IGNORE INTO accounts (id, name) VALUES (?, ?)`).run(3, 'McDonalds');
  db.prepare(`INSERT OR IGNORE INTO accounts (id, name) VALUES (?, ?)`).run(4, 'Walmart');
  db.prepare(`INSERT OR IGNORE INTO accounts (id, name) VALUES (?, ?)`).run(5, 'Powerade');
  db.prepare(`INSERT OR IGNORE INTO accounts (id, name) VALUES (?, ?)`).run(6, 'Tesla');

  db.prepare(`
    INSERT OR IGNORE INTO deals (id, name, start_date, end_date, value, status, account_id, org_id)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `).run(1, 'Lakers n Coca Cola', '2025-04-12', '2026-04-12', 200, 1, 1, 1);

  db.prepare(`
    INSERT OR IGNORE INTO deals (id, name, start_date, end_date, value, status, account_id, org_id)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `).run(2, 'Lakers n Nike', '2025-04-13', '2026-04-13', 600, 1, 2, 1);

  db.prepare(`
    INSERT OR IGNORE INTO deals (id, name, start_date, end_date, value, status, account_id, org_id)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `).run(3, 'BYU n Mcdonalds', '2025-04-25', '2025-06-12', 100, 1, 3, 2);

  db.prepare(`
    INSERT OR IGNORE INTO deals (id, name, start_date, end_date, value, status, account_id, org_id)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `).run(4, 'BYU n Walmart', '2025-04-25', '2025-06-12', 100, 1, 4, 2);

    db.prepare(`INSERT OR IGNORE INTO deals (id, name, start_date, end_date, value, status, account_id, org_id)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `).run(5, 'Jazz n Powerade', '2025-05-01', '2026-05-01', 300, 1, 5, 3);

    db.prepare(`INSERT OR IGNORE INTO deals (id, name, start_date, end_date, value, status, account_id, org_id)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `).run(6, 'Jazz n Tesla', '2025-06-01', '2026-06-01', 500, 0, 6, 3);

    db.prepare(`INSERT OR IGNORE INTO deals (id, name, start_date, end_date, value, status, account_id, org_id)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `).run(7, 'BYU x Powerade', '2025-04-01', '2025-10-01', 250, 1, 5, 2);

    db.prepare(`INSERT OR IGNORE INTO deals (id, name, start_date, end_date, value, status, account_id, org_id)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `).run(8, 'Jazz x Coca Cola', '2025-02-01', '2025-08-01', 400, 1, 1, 3);

    db.prepare(`INSERT OR IGNORE INTO deals (id, name, start_date, end_date, value, status, account_id, org_id)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `).run(9, 'Lakers x Tesla', '2025-03-15', '2025-11-15', 700, 0, 6, 1);

    db.prepare(`INSERT OR IGNORE INTO deals (id, name, start_date, end_date, value, status, account_id, org_id)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `).run(10, 'Jazz x McDonalds', '2025-05-20', '2025-11-20', 150, 1, 3, 3);

    db.prepare(`INSERT OR IGNORE INTO deals (id, name, start_date, end_date, value, status, account_id, org_id)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `).run(11, 'BYU x Tesla', '2025-04-10', '2025-12-10', 800, 1, 6, 2);

    db.prepare(`INSERT OR IGNORE INTO deals (id, name, start_date, end_date, value, status, account_id, org_id)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `).run(12, 'Lakers x Powerade', '2025-07-01', '2026-07-01', 450, 1, 5, 1);

    db.prepare(`INSERT OR IGNORE INTO deals (id, name, start_date, end_date, value, status, account_id, org_id)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `).run(13, 'Jazz x Nike', '2025-08-01', '2026-08-01', 550, 0, 2, 3);

    db.prepare(`INSERT OR IGNORE INTO deals (id, name, start_date, end_date, value, status, account_id, org_id)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `).run(14, 'BYU x Walmart', '2025-09-01', '2026-09-01', 220, 1, 4, 2);

    db.prepare(`INSERT OR IGNORE INTO deals (id, name, start_date, end_date, value, status, account_id, org_id)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `).run(15, 'Lakers x McDonalds', '2025-05-10', '2025-12-10', 320, 0, 3, 1);

    db.prepare(`INSERT OR IGNORE INTO deals (id, name, start_date, end_date, value, status, account_id, org_id)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `).run(16, 'Jazz x Walmart', '2025-06-15', '2026-01-15', 390, 1, 4, 3);

    db.prepare(`INSERT OR IGNORE INTO deals (id, name, start_date, end_date, value, status, account_id, org_id)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `).run(17, 'Lakers x Nike', '2025-03-20', '2025-12-20', 610, 1, 2, 1);

    db.prepare(`INSERT OR IGNORE INTO deals (id, name, start_date, end_date, value, status, account_id, org_id)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `).run(18, 'BYU x Coca Cola', '2025-10-01', '2026-10-01', 430, 0, 1, 2);

    db.prepare(`INSERT OR IGNORE INTO deals (id, name, start_date, end_date, value, status, account_id, org_id)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `).run(19, 'Jazz x Powerade', '2025-09-15', '2026-09-15', 670, 1, 5, 3);

    db.prepare(`INSERT OR IGNORE INTO deals (id, name, start_date, end_date, value, status, account_id, org_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`).run(20, 'Jazz x Tesla Power', '2025-05-01', '2026-05-01', 1000, 1, 6, 3);
    db.prepare(`INSERT OR IGNORE INTO deals (id, name, start_date, end_date, value, status, account_id, org_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`).run(21, 'BYU x Coca Cola', '2025-05-05', '2025-10-01', 400, 1, 1, 2);
    db.prepare(`INSERT OR IGNORE INTO deals (id, name, start_date, end_date, value, status, account_id, org_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`).run(22, 'Jazz x Powerade', '2025-06-01', '2026-01-01', 250, 0, 5, 3);
    db.prepare(`INSERT OR IGNORE INTO deals (id, name, start_date, end_date, value, status, account_id, org_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`).run(23, 'BYU x Tesla EV Collab', '2025-04-15', '2026-04-15', 900, 1, 6, 2);
    db.prepare(`INSERT OR IGNORE INTO deals (id, name, start_date, end_date, value, status, account_id, org_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`).run(24, 'Lakers x Powerade Slam', '2025-03-20', '2025-09-20', 600, 0, 5, 1);
    db.prepare(`INSERT OR IGNORE INTO deals (id, name, start_date, end_date, value, status, account_id, org_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`).run(25, 'Jazz x Nike Training', '2025-07-01', '2025-12-01', 750, 1, 2, 3);
    db.prepare(`INSERT OR IGNORE INTO deals (id, name, start_date, end_date, value, status, account_id, org_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`).run(26, 'Lakers x McDonalds Fuel', '2025-08-01', '2026-02-01', 300, 1, 3, 1);
    db.prepare(`INSERT OR IGNORE INTO deals (id, name, start_date, end_date, value, status, account_id, org_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`).run(27, 'Jazz x Coca Cola Refresh', '2025-06-15', '2025-11-15', 400, 0, 1, 3);
    db.prepare(`INSERT OR IGNORE INTO deals (id, name, start_date, end_date, value, status, account_id, org_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`).run(28, 'BYU x Nike Gear', '2025-05-01', '2026-01-01', 550, 1, 2, 2);
    db.prepare(`INSERT OR IGNORE INTO deals (id, name, start_date, end_date, value, status, account_id, org_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`).run(29, 'Jazz x Walmart Fan Events', '2025-04-30', '2026-04-30', 620, 1, 4, 3);
    db.prepare(`INSERT OR IGNORE INTO deals (id, name, start_date, end_date, value, status, account_id, org_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`).run(30, 'Lakers x Tesla Solar', '2025-05-10', '2026-03-10', 1200, 1, 6, 1);
    db.prepare(`INSERT OR IGNORE INTO deals (id, name, start_date, end_date, value, status, account_id, org_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`).run(31, 'BYU x Walmart Spirit Gear', '2025-07-01', '2025-12-01', 330, 0, 4, 2);
    db.prepare(`INSERT OR IGNORE INTO deals (id, name, start_date, end_date, value, status, account_id, org_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`).run(32, 'Jazz x Powerade Energy', '2025-05-25', '2026-01-25', 290, 1, 5, 3);
    db.prepare(`INSERT OR IGNORE INTO deals (id, name, start_date, end_date, value, status, account_id, org_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`).run(33, 'Lakers x Nike Next Gen', '2025-06-01', '2026-06-01', 800, 1, 2, 1);
    db.prepare(`INSERT OR IGNORE INTO deals (id, name, start_date, end_date, value, status, account_id, org_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`).run(34, 'BYU x McDonalds Youth Night', '2025-08-01', '2026-02-01', 410, 0, 3, 2);
    db.prepare(`INSERT OR IGNORE INTO deals (id, name, start_date, end_date, value, status, account_id, org_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`).run(35, 'Jazz x Coca Cola Summer Vibes', '2025-07-01', '2026-01-01', 460, 1, 1, 3);
    db.prepare(`INSERT OR IGNORE INTO deals (id, name, start_date, end_date, value, status, account_id, org_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`).run(36, 'Lakers x Powerade Gameday', '2025-09-01', '2026-03-01', 510, 1, 5, 1);
    db.prepare(`INSERT OR IGNORE INTO deals (id, name, start_date, end_date, value, status, account_id, org_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`).run(37, 'BYU x Tesla Tech Night', '2025-10-01', '2026-04-01', 880, 1, 6, 2);
    db.prepare(`INSERT OR IGNORE INTO deals (id, name, start_date, end_date, value, status, account_id, org_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`).run(38, 'Jazz x McDonalds Meal Pack', '2025-05-20', '2026-05-20', 390, 1, 3, 3);
    db.prepare(`INSERT OR IGNORE INTO deals (id, name, start_date, end_date, value, status, account_id, org_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`).run(39, 'Lakers x Walmart Courtside', '2025-11-01', '2026-05-01', 700, 0, 4, 1);

    return db;
  }

export default initializeDatabase;