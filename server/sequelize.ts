import { Sequelize } from 'sequelize-typescript';

export const sequelize = new Sequelize({
    name: 'ziontech',
    dialect: 'mysql',
    username: 'root',
    password: 'jinjinyoga',
    storage: ':memory:',
    modelPaths: [__dirname + '/model'],
});




