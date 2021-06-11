const express = require('express');
require('dotenv').config();
const db = require('./models');
const router = require('./routes');

const app = express();

app.use(express.json());

// Router
router(app);


db.sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log("Server is running on port 3000 !")
  })
})