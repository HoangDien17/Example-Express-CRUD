
const apiCreateUser = require('./api-create-route');
const apiUpdateUser = require('./api-update-route');
const apiDeleteUser = require('./api-delete-route');
const apiReadUser = require("./api-read-route")

module.exports = (app) => {
  app.use("/api", apiCreateUser);
  app.use("/api", apiUpdateUser);
  app.use("/api", apiDeleteUser);
  app.use("/api", apiReadUser);
}