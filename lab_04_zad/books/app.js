var express = require("express"); //express connected
var app = express();

app.use(express.json());
const sequelize = require("./database"); // connect to database
const Book = require("./models/book");
sequelize.sync();
const jwt = require("jsonwebtoken"); // token verification
const { SECRET_KEY } = require("./auth");
const { authenticateToken } = require("./auth");

const user = { id: 1, email: "test@test.com" }; // some user

//endpoints

app.post("/api/login", (req, res) => {
  const { email } = req.body;
  if (email !== user.email)
    return res.status(400).json({ error: "Invalid email" });

  // new token
  const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, {
    expiresIn: "1h",
  });
  res.json({ token });
});

app.get("/", (req, res) => {
  res.send("API IS WORKING");
});

app.get("/api/books", async (req, res) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: "Serwer error" });
  }
});

app.get("/api/books/:id", async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id); // finds a book by a primary key
    if (!book) return res.status(404).json({ error: "Book not found" });
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: "Serwer error" });
  }
});

app.post("/api/books", authenticateToken, async (req, res) => {
  try {
    const { title, author, year } = req.body;
    if (!title || !author || !year) {
      return res.status(400).json({ error: "No Data" });
    }
    const newBook = await Book.create({ title, author, year });
    res.status(201).json({ id: newBook.id });
  } catch (err) {
    res.status(500).json({ error: "Serwer error" });
  }
});

app.delete("/api/books/:id", authenticateToken, async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (!book) return res.status(404).json({ error: "Book not found" });
    await book.destroy();
    res.json({ message: "Book deleted" });
  } catch (err) {
    res.status(500).json({ error: "Serwer error" });
  }
});

app.listen(3001, async () => {
  try {
    await sequelize.authenticate(); // checks database connection
    console.log("Connected to database");
    console.log("Books service running on port 3001");
  } catch (err) {
    console.error("Cannot connect to database", err);
  }
});
