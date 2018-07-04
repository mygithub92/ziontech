import { Sequelize } from 'sequelize-typescript';

export const sequelize = new Sequelize({
    name: 'ziontech',
    dialect: 'mysql',
    username: 'root',
    password: '1234',
    storage: ':memory:',
    modelPaths: [__dirname + '/model'],
});




