const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

router.delete("/deleteUser/:id", UserController.apiDeleteUser);

module.exports = router;