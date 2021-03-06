const { User } = require('../database/models');
const generateJWTToken = require('../utils/jwt');

const createUser = async (payload) => {
  const userAlreadyRegistered = await User.findOne({
    where: { email: payload.email },
  });

  if (userAlreadyRegistered) return false;

  const newUser = await User.create(payload);

  const {
    id,
    displayName,
    email,
    image,
  } = newUser.dataValues;

  const token = generateJWTToken({
    id, displayName, email, image,
  });

  return { token };
};

module.exports = {
  createUser,
};
