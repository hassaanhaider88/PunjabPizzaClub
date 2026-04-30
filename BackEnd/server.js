import fastify from "fastify";
import dotenv from "dotenv";
import compression from "compression";
import multipart from "@fastify/multipart";
import cors from "@fastify/cors"


import connectToDB from "./configs/ConnectDB.js";
import userRoute from "./routers/User.router.js";
import productRoute from "./routers/Product.router.js";
import dealRoute from "./routers/Deals.router.js"

dotenv.config();
connectToDB();


const app = fastify();
const PORT = process.env.PORT;

app.register(compression());
app.register(multipart, {
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
});
app.register(cors)
app.register(import('@fastify/formbody'))

await app.register(import('@fastify/rate-limit'), {
  max: 100,
  timeWindow: '1 minute'
})

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

// Deals Routes
app.register(dealRoute, { prefix: "/api/deals" });

app.listen({ port: PORT }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`Server is now listening on ${address}`);
});
