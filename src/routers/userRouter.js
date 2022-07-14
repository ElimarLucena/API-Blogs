const express = require('express');
const controllers = require('../controllers/userController');
const { userCreationValidation } = require('../middleware/userMiddleware');

const userRouter = express.Router();

userRouter.post('/', userCreationValidation, controllers.createUser);

module.exports = userRouter;
