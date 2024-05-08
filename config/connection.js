// Allows us to with the db (sql) and set privacy for our sensitive info 
const Sequelize = require('sequelize'); 
require('dotenv').config();

const sequelize = process.env.DB_URL
  ? new Sequelize(process.env.DB_URL)
  : new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'postgres',
    }
  );

// export these functions
module.exports = sequelize;
