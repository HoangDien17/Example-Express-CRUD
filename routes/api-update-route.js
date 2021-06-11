const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

router.put("/updateUser/:id", UserController.apiUpdateUser);

module.exports = router;
