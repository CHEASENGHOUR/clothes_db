const jsonserver = require("json-server");
const server = jsonserver.create();
const router = jsonserver.router("db.json");
const middlewares = jsonserver.defaults();
const port = process.env.PORT || 8000;

// Add static file serving for images
// server.use('/images', jsonserver.static('./images'));

server.use(middlewares);
server.use(router);
server.listen(port);