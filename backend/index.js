const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
const { productRouter } = require("./routers/product-router");
const { orderRouter } = require("./routers/order-router");
const { userRouter } = require("./routers/user-router");
require("./firebase/connect");
require("./a");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/orders", orderRouter);
app.use("/products", productRouter);
app.use("/users", userRouter);

mongoose.connect(
  "mongodb+srv://shovalash1:Excel1957@shovaldb.mg0smvv.mongodb.net/shop2?retryWrites=true&w=majority",
  () => {
    console.log("connected to mongo db");
  }
);

const server = http.createServer(app);
const io = new Server(server, { cors: { origins: "*:*" } });

let userCounter = 0;
io.on("connection", (socket) => {
  io.emit("counter", ++userCounter);

  socket.on("disconnect", () => {
    io.emit("counter", --userCounter);
  });
});
const PORT = 3001;
server.listen(PORT, () => {
  console.log("Server is listening on port " + PORT);
});
