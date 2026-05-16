const clients = new Map();

export const addClient = (email, res, role) => {
  clients.set(email, { res, role });
  console.log(`Client added: ${email} | Total connected: ${clients.size}`);
};

export const removeClient = (email) => {
  clients.delete(email);
  console.log(`Client removed: ${email} | Total connected: ${clients.size}`);
};

export const sendToUser = (email, event, data) => {
  const client = clients.get(email);
  if (client) {
    client.res.write(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`);
    console.log(`Sent "${event}" to ${email}`);
  } else {
    console.log(`User ${email} not connected — skipping SSE`);
  }
};

export const sendToRider = (email, event, data) => {
  const client = clients.get(email);
  if (client && client.role === "rider") {
    client.res.write(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`);
    console.log(`Sent "${event}" to rider ${email}`);
  }
}
export const sendToAdmins = (event, data) => {
  let count = 0;
  for (const [email, client] of clients.entries()) {
    if (client.role === "admin") {
      client.res.write(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`);
      count++;
    }
  }
  console.log(`Sent "${event}" to ${count} admin(s)`);
};