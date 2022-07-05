require('dotenv').config();

const options = {
  username: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'password',
  database: process.env.MYSQL_DATABASE || 'blogs-api',
  host: process.env.HOSTNAME || 'localhost',
  port: process.env.MYSQL_PORT || '3306',
  dialect: 'mysql',
};

module.exports = {
  development: {
    ...options,
  },
  test: {
    ...options,
  },
  production: {
    ...options,
  },
};
