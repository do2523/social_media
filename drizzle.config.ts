import { type Config } from "drizzle-kit";
import { url } from "inspector";
import { env } from "~/env";


export default {
  schema: "./db/schema.ts", // Your schema location
  dialect: "postgresql",
  out: "./drizzle", // Where our migrations will be outputted
  driver: "pglite", // PostgreSQL driver
  dbCredentials: {
	url: env.AZURE_DB_HOST,
  }
} satisfies Config;
