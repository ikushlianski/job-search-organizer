import { Sequelize } from 'sequelize';

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config.ts')[env];

export const sequelizeConnection = new Sequelize(config);
