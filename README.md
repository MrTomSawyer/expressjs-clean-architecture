# Introduction

This application has mostly been inspired by Robert Miller's 'Clean Architecture'.
It's logic is split into several layers: controllers, services, repositories, entities, and is driven by Dependency Injection (DI) and Inversion of Control (IoC) design patterns.
A brief representation is provided on the illustration below:

![Schema](https://sun9-33.userapi.com/impg/PPFG-gwdOjVJY-bRMKtwNotg_FvGp7QFw9cDAw/N7ev7_si3rw.jpg?size=1223x802&quality=95&sign=389d7e24053fb0f8474e992b466a656e&type=album)

# Features
- Fits SOLID principles;
- Easy to scale and maintain;
- Layer architecture is commonly best oprion for microservices;

# Tech
- [Express.js](https://github.com/expressjs/express) for a convenient request-response handling;
- [Inversify.js](https://inversify.io/) for a better dependency injection;
- [Prisma](https://www.prisma.io/) as the most trending Node.js ORM;
- [Jest](https://jestjs.io/)/[Supertest](https://github.com/ladjs/supertest) for unit and e2e testing;
- [SQLite](https://www.sqlite.org) just for fun;

# Startup

1. install dependencies
```bash
npi i
```

2. Init Prisma
```bash
npx prisma genetate
```

3. Run in development mode:
```bash
npm run dev
```

or for production
```bash
npm run build
npm run start
```

# API

`POST users/register` - registers a user

Request body:
```json
{
  "email": "janedoe@express.com",
  "password": "qwerty123",
  "name": "Jane Doe"
}

`POST users/login` - sings user in

Request body:
```json
{
  "email": "janedoe@express.com",
  "password": "qwerty123"
}
```

`GET users/info` - get user info

Request body:
```json
{
  "email": "janedoe@express.com",
  "password": "qwerty123",
  "name": "Jane Doe"
}
```