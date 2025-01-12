import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const userTable = sqliteTable(`user`, {
  id: integer().primaryKey(),
  email: text().notNull(),
  emailVerified: integer().default(0),
  name: text(),
  username: text().unique().notNull(),
  role: text({ enum: [`customer`, `admin`] }).notNull().default(`customer`),
  birthday: text(),
  phone: text(),
  address: text(),
  picture: text(),
})
