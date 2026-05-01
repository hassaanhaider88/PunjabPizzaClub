
import { SendAllOrders, createOrder,MyOrders } from "../controllers/Order.controller.js";
import IsAdminAuthMD from "../middlewares/IsAdminAuth.js";
import IsUserLoginAuth from "../middlewares/IsUserLoginAuth.js";

async function routes(fastify, option) {
    fastify.get("/all", { preHandler: IsAdminAuthMD }, SendAllOrders);
    fastify.post("/create", { preHandler: IsUserLoginAuth }, createOrder);
    fastify.get("/me", { preHandler: IsUserLoginAuth }, MyOrders)
}

export default routes;
