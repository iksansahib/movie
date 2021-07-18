# Get Movie List and Detail

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `ormconfig.json` file
3. Run migration `ts-node --transpile-only ./node_modules/typeorm/cli.js migration:run`
4. Run `npm run start` command to start the app

How to test:

`npm run test`

`npm run test:cov`

**TODO**
1. Move credentials to env vars
2. Add dependency injection framework
3. Add more test for repositories
4. Implement winston for logger