import { drizzle } from "drizzle-orm/node-postgres";
import {Client} from "pg";
import { env } from "~/env";
import * as schema from "./schema";

/**
 * Cache the database connection in development. This avoids creating a new connection on every HMR
 * update.
 */
const client = new Client({
	host:env.AZURE_DB_HOST,
	port:5432,
	user: env.AZURE_DB_USER,
  	password: env.AZURE_DB_USER,
  	database: "db_name",

})

await client.connect();
export const db = drizzle(client);


