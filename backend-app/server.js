const jsonServer = require('json-server');
const server = jsonServer.create(); //json-server
const router = jsonServer.router("data.json") // --watch ruta
const middlewares = jsonServer.defaults()

server.use(middlewares);
server.use(router);
const port = process.env.PORT || 4000;
server.listen(port, ()=> console.log(port + " Estoy en linea"))