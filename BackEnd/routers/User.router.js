import { LoginUser, SignUpUser, UserByToken } from "../controllers/User.controller.js";

async function routes(fastify, options) {
  fastify.post("/signup", SignUpUser);
  fastify.post("/login", LoginUser);
  fastify.get("/bytoken", UserByToken)
}

//ESM
export default routes;
