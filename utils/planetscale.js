import { Kysely } from "kysely";
import { PlanetScaleDialect } from "kysely-planetscale";


export const queryBuilder = new Kysely({
    dialect: new PlanetScaleDialect({
        url: process.env.DATABASE_URL,
    })
})



