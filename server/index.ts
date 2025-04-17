import express from "express";
import cors from "cors";
import initializeDatabase from "./db";
const app = express();
const port = process.env.PORT || 3000;

const db = initializeDatabase();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/organizations", (req, res) => {
  const rows = db.prepare("SELECT * FROM organizations").all();
  res.json({ message: "Welcome to the server! 🎉", rows });
});

app.get("/accounts", (req, res) => {
  const rows = db.prepare("SELECT * FROM accounts").all();
  res.json({ message: "Welcome to the server! 🎉", rows });
});

app.get("/deals", (req, res) => {
  try {
    const allowedSortFields = ["start_date", "end_date", "value", "id"];
    const sortByRaw = req.query.sortBy;
    const sortBy = typeof sortByRaw === "string" && allowedSortFields.includes(sortByRaw)
      ? sortByRaw
      : "start_date";

    const orderRaw = req.query.order;
    const order = orderRaw === "desc" ? "DESC" : "ASC";

    const statusFilter =
      req.query.status === "active"
        ? "WHERE status = 1"
        : req.query.status === "inactive"
        ? "WHERE status = 0"
        : "";

    const query = `SELECT * FROM deals ${statusFilter} ORDER BY ${sortBy} ${order}`;
    const rows = db.prepare(query).all();

    res.json({ message: `Deals sorted by ${sortBy} ${order}`, rows });
  } catch (error) {
    console.error("Error in /deals:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
