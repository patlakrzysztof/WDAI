var express = require("express"); //express connected
var app = express();

app.use(express.json());
const sequelize = require("./database"); // connect to database
const Order = require("./models/order");
sequelize.sync();

const jwt = require("jsonwebtoken"); // token verification
const { SECRET_KEY } = require("./auth");
const { authenticateToken } = require("./auth");

const user = { id: 1, email: "test@test.com" }; // some user

app.listen(3002, async () => {
  try {
    await sequelize.authenticate(); // checks database connection
    console.log("Connected to database");
    console.log("Orders service running on port 3002");
  } catch (err) {
    console.error("Cannot connect to database", err);
  }
});

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

app.get("/api/orders/:userId", async (req, res) => {
  try {
    const orders = await Order.findAll({
      where: { userId: req.params.userId },
    }); // finds orders for a user
    if (!orders) return res.status(404).json({ error: "Order not found" });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: "Serwer error" });
  }
});

app.post("/api/orders", authenticateToken, async (req, res) => {
  try {
    const { userId, bookId, quantity } = req.body;
    try {
      const hasBook = await fetch("http://localhost:3001/api/books/" + bookId);
      if (!hasBook.ok) {
        return res.status(500).json({ error: "book not found" });
      }
    } catch {
      res.status(500).json({ error: "Did not connect to Bookservice" });
    }
    if (!userId || !bookId || !quantity) {
      return res.status(400).json({ error: "No Data" });
    }
    const newOrder = await Order.create({ userId, bookId, quantity });
    res.status(201).json({ id: newOrder.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.delete("/api/orders/:orderId", authenticateToken, async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.orderId);
    if (!order) return res.status(404).json({ error: "Order not found" });
    await order.destroy();
    res.json({ message: "Order deleted" });
  } catch (err) {
    res.status(500).json({ error: "Serwer error" });
  }
});

app.patch("/api/orders/:orderId", authenticateToken, async (req, res) => {
  const { orderId } = req.params;
  const { quantity } = req.body;

  if (!quantity) {
    return res.status(400).json({ error: "Quantity is required" });
  }

  const order = await Order.findByPk(orderId);

  if (!order) {
    return res.status(404).json({ error: "Order not found" });
  }

  order.quantity = quantity; // change to new data
  await order.save();

  res.json({
    message: "Order updated",
    order,
  });
});
