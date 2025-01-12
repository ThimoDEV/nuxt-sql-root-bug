### Steps to reproduce

- Create a .env
- execute pnpm db:push
- Start Nuxt
- Try to add a user (euther normal or through run and debug)
- Nuxt will restart after user is added, and wont work anymore...


If you use the workaround you will see that it works where I place my db inside a folder so not in root (see .env.example)
