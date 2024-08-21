const express = require("express");
const mongoose = require("mongoose");
const app = express();
//import routes
const productRoutes = require("./src/routes/product.routes");
const salesRoutes = require("./src/routes/sale.routes");
require("dotenv").config();
//conecetarnos a mongoose
mongoose
  .connect(process.env.DB_URL)
  .then((db) => console.log("D8 connected"))
  .catch((err) => console.log(err));
//configuration
app.use(express.urlencoded({ extended: false }));

// middleware para ver los headers

// configure routes

app.use("/products", productRoutes);
app.use("/sales", salesRoutes);

app.listen(3000, () => {
  console.log("Server running");
});
