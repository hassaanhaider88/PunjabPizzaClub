import { addClient, removeClient } from "../utils/sseManager.js";

export const sseConnect = (req, reply) => {
    const { email, role } = req.user;
    console.log(email, "Connection Established");

    // Use reply.raw — this is the real Node.js ServerResponse
    const res = reply.raw;

    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");
    res.setHeader("Access-Control-Allow-Origin", "*"); // if CORS needed
    res.flushHeaders();

    res.write(`event: connected\ndata: ${JSON.stringify({ ok: true })}\n\n`);

    addClient(email, res, role);

    // Use req.raw — this is the real Node.js IncomingMessage
    req.raw.on("close", () => {
        console.log(email, "Connection Closed");
        removeClient(email);
    });
};