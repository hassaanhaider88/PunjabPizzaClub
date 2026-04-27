import {
  SendAllProduct,
  CreateNewProduct,
  DeleteProduct,
  UpdatePrductStatus
} from "../controllers/Product.controller.js";
import IsAdminAuthMD from "../middlewares/IsAdminAuth.js";

const productRotues = (fastify, options) => {
  fastify.get("/all", SendAllProduct);
  fastify.post("/create", { preHandler: IsAdminAuthMD }, CreateNewProduct);
  fastify.post("/update-status", { preHandler: IsAdminAuthMD }, UpdatePrductStatus)
  fastify.post("/:id", { preHandler: IsAdminAuthMD }, DeleteProduct);

};

export default productRotues;
