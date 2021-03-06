const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const ValidationUser = require('../validation/user-validation');

router.post("/createUser", ValidationUser.register, UserController.apiCreateUser);

module.exports = router;
