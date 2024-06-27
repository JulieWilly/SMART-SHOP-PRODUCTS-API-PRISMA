import express from "express";
import useRouter from "./routers/products.router.js";

const products = express();

products.use(express.json());

products.use("/products", useRouter);

products.listen(3000, () => {
  console.log("Running at port 3000.");
});
