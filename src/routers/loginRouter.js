const express = require('express');
const controllers = require('../controllers/loginController');
const { loginValidation } = require('../middleware/loginMiddleware');

const loginRouter = express.Router();

loginRouter.post('/', loginValidation, controllers.authenticate);

module.exports = loginRouter;
