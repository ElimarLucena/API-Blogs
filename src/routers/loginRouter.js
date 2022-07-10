const express = require('express');
const controllers = require('../controllers/loginController');

const loginRouter = express.Router();

loginRouter.post('/', controllers.authenticate);

module.exports = loginRouter;
