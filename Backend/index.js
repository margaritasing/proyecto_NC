const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");

const cors = require("cors");


mongoose.connect(process.env.MONGO_URI,
  {
      useUnifiedTopology:true,
      useNewUrlParser:true
  })

  .then(()=> console.log("Database Conectada"))
  .catch((error => console.error(error)))

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");
});
