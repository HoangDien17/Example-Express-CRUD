const express = require('express');
require('dotenv').config();
const db = require('./models');
const router = require('./routes');

const app = express();

app.use(express.json());

// Router
router(app);


db.sequelize.sync()
.then(() => {
  console.log("Connection to database successfully!");
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT} !`)
  })
})
.catch(() => {
  console.log("Connection to database failure !");
})
