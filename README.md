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
specify the password of Database.
```


To start the server (from the root of the project)

```
npm run start
> During this time the server will connect to the Database specified in server/sequelize.ts and create all of the tables.
```

To populate data to Database tables

```
go to data folder through cmd(for Windows) or Terminal(for Mac)
run runmysql.bat(for Windows)
run runmysql.sh(for Mac)
```

Install server dependencies


NodeJS server will be running on http://localhost:5000

