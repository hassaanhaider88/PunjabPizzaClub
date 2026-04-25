import {
  SendAllProduct,
  CreateNewProduct,
} from "../controllers/Product.controller.js";
import IsAdminAuthMD from "../middlewares/IsAdminAuth.js";

const productRotues = (fastify, options) => {
  fastify.get("/all", SendAllProduct);
  fastify.post("/create", { preHandler: IsAdminAuthMD }, CreateNewProduct);
};

export default productRotues;
