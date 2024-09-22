import "reflect-metadata";
import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DATABASE_HOST,
    port: 33071,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DB,
    synchronize: true,
    logging: true,
    entities: [
        __dirname + '/../**/*.entity.ts'
    ],
    subscribers: [],
    migrations: [],
});

AppDataSource
    .initialize()
    .then(() => console.log('database connected success'))
    .catch((e) => console.log(e));

export default AppDataSource 