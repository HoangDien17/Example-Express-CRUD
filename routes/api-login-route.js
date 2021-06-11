const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

router.post("/loginUser", UserController.apiLoginUser);

module.exports = router;
