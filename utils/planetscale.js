import { Kysely } from "kysely";
import { PlanetScaleDialect } from "kysely-planetscale";


export const queryBuilder = new Kysely({
    dialect: new PlanetScaleDialect({
        name: process.env.DB_NAME,
        host: process.env.DB_HOST,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
    })
})



