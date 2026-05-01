import {
  SendAllOrders,
  createOrder,
  MyOrders,
  CancelOrder,
  updateOrderStatus,
  updateOrderPaymentStatus,
  AssignRiderToOrder,
} from "../controllers/Order.controller.js";
import IsAdminAuthMD from "../middlewares/IsAdminAuth.js";
import IsUserLoginAuth from "../middlewares/IsUserLoginAuth.js";

async function routes(fastify, option) {
  fastify.get("/all", { preHandler: IsAdminAuthMD }, SendAllOrders);
  fastify.post(
    "/update-order-status/:id",
    { preHandler: IsAdminAuthMD },
    updateOrderStatus,
  );
  fastify.post(
    "/update-payment-status/:id",
    { preHandler: IsAdminAuthMD },
    updateOrderPaymentStatus,
  );
  fastify.post(
    "/assgin-rider/:id",
    { preHandler: IsAdminAuthMD },
    AssignRiderToOrder,
  );
  // user routes
  fastify.post("/create", { preHandler: IsUserLoginAuth }, createOrder);
  fastify.get("/me", { preHandler: IsUserLoginAuth }, MyOrders);
  fastify.get("/cancel/:id", { preHandler: IsUserLoginAuth }, CancelOrder);
}

export default routes;
