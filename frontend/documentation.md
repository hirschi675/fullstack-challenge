# SponsorCX Project (3.6 Hours) <-- Change this to whatever time I actually used*****

I started April 15th 6:00PM

## Basic Frontend Mock Up

**6:00PM-6:35PM**
I started by building out the frontend design that I made on figma so I could set up the bones that will be needed for the frotend and backend. I wanted to display the accounts so you can swith between them and organizations. I also made a global JSON Object called db to hold my temporary hardcoded data until I set it up in the database.

Note: c_date: 04/12/2025, u_date: 04/13/2025 will be added to all of the data afterwards

Example:
```
    const db = {
      oranizations: [{id: 1, name: "Lakers"}, {id: 2, name: "BYU"}],
      accounts: [{id: 1, name: "Coca Cola" org_id: 1}, {id: 2, name: "Nike" org_id: 1}, {id: 3, name: "McDonalds" org_id: 2}, {id: 4, name: "Walmart", org_id: 2}],
      deals: [{id: 1, name: "Lakers Coca Cola", start_date: 04/12/2025, end_date: 04/12/2026, value: 200, status: true, account_id: 1}, {id: 2, name: "Lakers Coca Cola", start_date: 04/13/2025, end_date: 04/13/2026, value: 600, status: true, account_id: 1}, {id: 3, name: "Lakers Coca Cola", start_date: 04/25/2025, end_date: 06/12/2025, value: 100, status: true, account_id: 2}]
    }
```

## Basic Backend Set Up

**6:35PM-7:30PM**
I set up the models for the accounts and deals. I also decided to go with a linking table for the deals because I think it's best so I don't have to make multiple accounts for each of the organizations. I will test it out and decide if I should go back and change it so each account has an org_id.