import { LoginUser, SignUpUser, UserByToken, LogOut, sendRiders } from "../controllers/User.controller.js";
import IsAdminAuthMD from "../middlewares/IsAdminAuth.js";

async function routes(fastify, options) {
  fastify.post("/signup", SignUpUser);
  fastify.post("/login", LoginUser);
  fastify.get("/bytoken", UserByToken);
  fastify.get("/logout", LogOut);
  fastify.get("/riders", { preHandler: IsAdminAuthMD }, sendRiders)
}

//ESM
export default routes;
