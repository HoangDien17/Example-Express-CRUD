const express = require('express');
const router = express.Router();
const HomeController = require('../controllers/HomeController');
const middlewareAuthenToken = require('../middlewares/authenToken');

router.get("/", middlewareAuthenToken, HomeController.getIndex);

module.exports = router;
