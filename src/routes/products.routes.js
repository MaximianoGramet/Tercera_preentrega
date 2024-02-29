import { Router } from "express";
import * as ProductController from "../controllers/product.controllers.js";

const router = Router();

router.get("/", ProductController.getProductList);

router.get("/:id", ProductController.getProductById);

router.delete("/:id", ProductController.deleteProduct);

router.post("/", ProductController.createProduct);

router.put("/:pid", ProductController.updateProduct);

export default router;
