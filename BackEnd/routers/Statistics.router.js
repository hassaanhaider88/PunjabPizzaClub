import IsAdminAuthMD from "../middlewares/IsAdminAuth.js";
import { sendAllStatistics } from "../controllers/Statistics.controller.js";

async function routes(fastify,option) {
 fastify.get("/",{prehHandler : IsAdminAuthMD},sendAllStatistics)   
}

export default routes;