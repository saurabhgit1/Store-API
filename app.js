import express from "express";
import notFoundMW from "./middleware/not-found.js";
import errorHandlerMiddlewareMW from "./middleware/error-handler.js";
import dotenv from "dotenv";
import connectDB from "./db/connect.js";
dotenv.config();
import productsRouter from "./routers/products.js";

const app = express();
const PORT = process.env.PORT || 3000;

//middlewares
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("Store API");
});
app.use("/api/v1/products", productsRouter);
//prouducts route

app.use(notFoundMW);
app.use(errorHandlerMiddlewareMW);

const start = async () => {
  try {
    //connect to db
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log("port started at" + PORT);
    });
  } catch (error) {
    console.error(error);
  }
};

start();
