# SponsorCX Fullstack Challenge - Backend

This is a basic NodeJS/Express project. Customize it to your needs. Good luck!

## Getting Started
```bash
npm i
npm run dev
```

## Add More Organizations, Accounts, Or Deals

If you would like to add more Organizations, Accounts, Or Deals, you will have to add them manually or you can copy one of the sql quries I've added to the `db.ts` file and change it to be a unique query.

Example:
  - db.prepare(`INSERT OR IGNORE INTO organizations (id, name) VALUES (?, ?)`).run(1, 'Lakers');
  - db.prepare(`INSERT OR IGNORE INTO accounts (id, name) VALUES (?, ?)`).run(1, 'Coca Cola');
  - db.prepare(`INSERT OR IGNORE INTO deals (id, name, start_date, end_date, value, status, account_id, org_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`).run(39, 'Lakers x Walmart Courtside', '2025-11-01', '2026-05-01', 700, 0, 4, 1);