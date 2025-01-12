import { useDB } from "~~/server/database/db"
import { userTable } from "~~/server/database/schema"


export default defineEventHandler(async (event) => {
   await  useDB().insert(userTable).values({
      email: "myTest@google.com",
      username: `${Math.random()} + new user`,
      name: "test",
      role: `customer`,
    })
  })
