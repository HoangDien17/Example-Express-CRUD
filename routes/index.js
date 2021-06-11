
const apiCreateUser = require('./api-create-route');
const apiUpdateUser = require('./api-update-route');
const apiDeleteUser = require('./api-delete-route');
const apiReadUser = require("./api-read-route");
const homeRoute = require('./home-route');
const apiLoginRoute = require("./api-login-route");

module.exports = (app) => {
  app.use("/api", apiLoginRoute);
  app.use("/api", apiCreateUser);
  app.use("/api", apiUpdateUser);
  app.use("/api", apiDeleteUser);
  app.use("/api", apiReadUser);
  app.use("/", homeRoute);
}