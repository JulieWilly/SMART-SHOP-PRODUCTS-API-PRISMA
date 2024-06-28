import { Router } from "express";

import { config } from "dotenv";
import { getAllProducts, GetSingleProduct, createProduct, updateSingleProduct, deleteProducts} from '../controllers/products.controllers.js'
config();

const router = Router();


router.get("/", getAllProducts).get("/:id",GetSingleProduct ).post("/", createProduct).patch("/:id",updateSingleProduct ).delete("/:id", deleteProducts)

export default router;
