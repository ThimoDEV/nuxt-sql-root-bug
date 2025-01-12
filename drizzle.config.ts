import { defineConfig } from 'drizzle-kit'
import 'dotenv/config'

export default defineConfig({
  out: `./drizzle`,
  schema: `server/database/schema.ts`,
  dialect: `sqlite`,
  driver: undefined,
  dbCredentials: {
    url: process.env.DB_FILE_NAME!,
  },
})
