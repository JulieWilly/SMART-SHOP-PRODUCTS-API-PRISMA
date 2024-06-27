import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { config } from "dotenv";
import {} from '../controllers/products.controllers.js'
config();

const router = Router();
const prisma = new PrismaClient();

router.get("/", getAllProducts);

router.get("/:id",GetSingleProduct );

router.post("/", createProduct);

router.patch("/:id",updateSingleProduct );

router.delete("/:id", deleteProducts);

export default router;
