const server = require("./src/server");
const log = require("ak-logger");

server.listen(8080, () => {
  log.info({server: "localhost", port: 8080}, "Server listen");
});
