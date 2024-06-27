<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

<p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>

## Description

This repository contains a simple [NestJS](https://github.com/nestjs/nest) application that performs CRUD operations using PostgreSQL and TypeORM. It also includes pgAdmin for database management. The project is set up to run in a Docker environment, ensuring consistency across development and production setups.

## Prerequisites

Before you begin, ensure you have Docker installed on your machine. If not, download and install Docker for your operating system.

## Running the app Using Docker

To start the application with Docker, follow these steps:

```bash
# Build the docker images and start services
$ docker compose up -d

# Rebuild and restart service after making changes
$ docker compose up --build -d
```

This command will start all services defined in docker-compose.yml, including your NestJS application and associated services like PostgreSQL and pgAdmin.

### Access the application

- The NestJS application is available at `http://localhost:3000`
- pgAdmin is available at `http://localhost:5050`

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).
