import {Sequelize} from 'sequelize';

export default new Sequelize(
    process.env.POSTGRES_DATABASE!,
    process.env.POSTGRES_USER!,
    process.env.POSTGRES_PASSWORD,
    {
        dialect: 'postgres',
        host: process.env.POSTGRES_HOST,
        port: parseInt(process.env.POSTGRES_PORT || "")
    }
);
