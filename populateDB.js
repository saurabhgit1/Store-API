import connectDB from "./db/connect.js";
import dotenv from "dotenv";
dotenv.config();
import Product from "./models/product.js";
import data from "./products.json" assert { type: "json" };

const populateDB = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Product.deleteMany();
    await Product.create(data);
    console.log("Success!!!");
    process.exit(0);
  } catch (error) {
    console.error(error);
  }
};

populateDB();
