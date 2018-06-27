# Titanium Thread Blockchain application

> Nothing here for now.

## How to run application locally.
Need to install MySQL server.

Install [nodemon](https://github.com/remy/nodemon) globally

```
npm i nodemon -g
```

Install server dependencies

```
npm install
cd ng-client
npm install
```

To connect MySQL Database
```
create a db called 'ziontech'
open file server/sequelize.ts
change to you local Database password.
```


To start the server (from the root of the project)

```
npm run start
> During this time the server will connect to the Database and create all of the tables.
```
NodeJS server will be running on http://localhost:5000

To populate data to Database tables

```
go to data folder through cmd(for Windows) or Terminal(for Mac)
run runmysql.bat(for Windows)
run runmysql.sh(for Mac)
```

Install client dependencies

```
cd ng-client
npm install
```

Config client to use local server

```
open ng-client/src/app/services/server.url.ts
set baseUrl variable to 'http://localhost:5000' (Note, DO NOT check this check in, in PROD server/client share the same port)
```



