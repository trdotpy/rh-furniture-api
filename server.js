require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const helmet = require("helmet");
const userRoutes = require("./routes/users");
const productRoutes = require("./routes/products");
const categoryRoutes = require("./routes/categories");
const stripeRoute = require("./routes/payment");
const checkoutRoute = require("./routes/stripe");

const app = express();
const port = process.env.PORT || 4000;

// Enable cors
app.use(cors());

// Parse incoming request bodies in a middleware before handlers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Help secure Express apps with various HTTP headers
app.use(helmet());

// DB connection
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Successfully connected to the database"))
  .catch((error) => console.error(error));

// Routes
app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/categories", categoryRoutes);
app.use("/checkout", stripeRoute);
app.use("/create-checkout-session", checkoutRoute);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

// Start server
app.listen(port, () => console.log(`Server is listening on port ${port}`));
