const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

//Express server
const app = express();
const port = process.env.PORT || 5050;

//Middleware
app.use(express.json());
app.use(cors());

//Database connection
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

//Routs
const itemRouter = require("./routes/Items");
const userRouter = require("./routes/users");
const invoiceRouter = require("./routes/invoices");

app.use("/items", itemRouter);
app.use("/users", userRouter);
app.use("/invoices", invoiceRouter);

//Start server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
