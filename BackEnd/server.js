import fastify from "fastify";
import dotenv from "dotenv";
import compression from "compression";
import fastifyMultipart from "@fastify/multipart";
import cors from "@fastify/cors"

import connectToDB from "./configs/ConnectDB.js";
import userRoute from "./routers/User.router.js";
import productRoute from "./routers/Product.router.js";

dotenv.config();
connectToDB();


const app = fastify();
const PORT = process.env.PORT;

app.register(compression());
app.register(fastifyMultipart);
app.register(cors)

// Home Route for checking API is working...
app.get("/", () => {
  return {
    success: true,
    message: "Punjab Pizza APIs Working Well",
  };
});

// User Auth Routes
app.register(userRoute, { prefix: "/api/auth" });

// Product Routes
app.register(productRoute, { prefix: "/api/products" });

app.listen({ port: PORT }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`Server is now listening on ${address}`);
});
