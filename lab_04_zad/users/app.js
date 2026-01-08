var express = require("express"); //express connected
var app = express();

app.use(express.json());
const sequelize = require("./database"); // connect to database
const User = require("./models/user");
sequelize.sync();

const jwt = require("jsonwebtoken"); // token verification
const { SECRET_KEY } = require("./auth");
const { authenticateToken } = require("./auth");
const { bcrypt } = require("./auth");

app.listen(3003, async () => {
  try {
    await sequelize.authenticate(); // checks database connection
    console.log("Connected to database");
    console.log("Users service running on port 3003");
  } catch (err) {
    console.error("Cannot connect to database", err);
  }
});

//endpoints

app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!email || !password)
      return res.status(400).json({ error: "Missing email or password" });

    if (!user)
      return res.status(400).json({ error: "Invalid email or password" });

    const match = await bcrypt.compare(password, user.password);

    if (!match) return res.status(400).json({ error: "Invalid password" });

    // new token
    const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

app.post("/api/register", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ error: "Missing email or password" });

    // hashing a password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({ email, password: hashedPassword });
    res.status(201).json({ id: newUser.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

app.get("/", (req, res) => {
  res.send("API IS WORKING");
});
