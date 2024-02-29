import { Router } from "express"
import * as CartController from "../controllers/cart.controllers.js"

const router = Router()

router.get("/", CartController.getCartController)
router.get("/:cid", CartController.getCartByIdController)
router.post("/", CartController.createCartController)
router.put("/:cid", CartController.updateCartController)
router.delete("/:cid", CartController.deleteCartController)
router.delete("/:cid/clear", CartController.clearCartController)
router.delete("/:cid/products/:pid", CartController.deleteProductFromCartController)
router.put('/:cid/products/:pid', CartController.setProductQuantityController)
router.post("/:cid/products/:pid", CartController.addProductCartController)

export default router
