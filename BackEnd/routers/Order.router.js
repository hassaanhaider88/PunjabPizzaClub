
import { SendAllOrders, createOrder, MyOrders ,CancelOrder} from "../controllers/Order.controller.js";
import IsAdminAuthMD from "../middlewares/IsAdminAuth.js";
import IsUserLoginAuth from "../middlewares/IsUserLoginAuth.js";

async function routes(fastify, option) {
    fastify.get("/all", { preHandler: IsAdminAuthMD }, SendAllOrders);
    // user routes
    fastify.post("/create", { preHandler: IsUserLoginAuth }, createOrder);
    fastify.get("/me", { preHandler: IsUserLoginAuth }, MyOrders);
    fastify.get("/cancel/:id", { preHandler: IsUserLoginAuth }, CancelOrder)

}

export default routes;
