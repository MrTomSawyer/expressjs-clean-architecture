# Introduction

This application has mostly been inspired by Robert Martins's 'Clean Architecture'.

It's logic is split into several layers: controllers, services, repositories, entities, and is driven by Dependency Injection (DI) and Inversion of Control (IoC) design patterns.

A brief representation is provided on the illustration below:

![Schema](https://sun9-58.userapi.com/impg/WswkmEeE8y30wjlVdzzXwEiQsDOU8VMY4OhzaA/PHfQP4uOALY.jpg?size=1890x1208&quality=95&sign=1c043b5ed623c376af1bbc8598fce2cc&type=album)

Dependensy injection is implemented using ```Inversify.js``` - a third-party tool which provides an IoC container. Before the application starts, IoC container registeres all classes marked with ```@injectable``` decorator and binds them to the specified tokens (symbols in our case):

![ioc](https://sun9-79.userapi.com/impg/MCbwfxFGMMgJhsSlBSenZOWNpD_WHsa14tV-LQ/27nFPmGfzR4.jpg?size=791x238&quality=95&sign=49a4fd9f862bf06cab7f194921aef120&type=album)

To inject an already registered dependency use an ```@inject``` decorator:

![inject](https://sun9-78.userapi.com/impg/GvuH04QUgnDw1OaPbgHqH0aOa3AXVKJOa_6LnQ/RZJ1S8dc1l0.jpg?size=745x187&quality=95&sign=aac317f449680965ff3b8ea49f0d3b26&type=album)

## Features
- Fits SOLID principles;
- Easy to scale and maintain;
- Layer architecture is commonly best option for microservices;

## Tech
- [Express.js](https://github.com/expressjs/express) for a convenient request-response handling;
- [Inversify.js](https://inversify.io/) for a better dependency injection;
- [Prisma](https://www.prisma.io/) as the most trending Node.js ORM;
- [Jest](https://jestjs.io/)/[Supertest](https://github.com/ladjs/supertest) for unit and e2e testing;
- [SQLite](https://www.sqlite.org) just for fun;

## Startup

1. install dependencies
```bash
$ npm i
```

2. Init Prisma
```bash
$ npx prisma genetate
```

3. Run in development mode:
```bash
$ npm run dev
```

or for production
```bash
$ npm run build
$ npm run start
```

## API

`POST users/register` - registers a user

Request body:
```json
{
  "email": "janedoe@express.com",
  "password": "qwerty123",
  "name": "Jane Doe"
}
```

`POST users/login` - sings user in

Request body:
```json
{
  "email": "janedoe@express.com",
  "password": "qwerty123"
}
```

`GET users/info` - gets current user info
```