import { LoginUser, SignUpUser } from "../controllers/User.controller.js";

async function routes(fastify, options) {
  fastify.post("/signup", SignUpUser);
  fastify.post("/login", LoginUser);
}

//ESM
export default routes;
