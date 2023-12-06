# Desafio Escribo: Node.js Project
Develop a RESTful API for user authentication, which allows registration (sign up), authentication (sign in) and user information retrieval operations, using Express, JWT with token and and Hash encryption on password. 


## Project Overview
This Node.js project involves the use of various npm packages to create a web server with Express, connect to a MySQL database, and implement user authentication using bcrypt and JSON Web Tokens (jsonwebtoken).

#Prerequisites
Make sure you have Node.js installed on your machine. The project was developed using npm version 9.1.3.

`npm --version`

## Project Initialization
Initialize your project with the following command:

`npm init config package`

## Installing Dependencies
Install the required npm packages for the project:

`npm install --save express mysql bcrypt jsonwebtoken`
`npm install --save-dev nodemon morgan`

Note: The nodemon package is installed as a development dependency for automatic server restarts during development, and morgan is used for logging HTTP requests.

## Setting Up the Server
Create the main server file server.js and an app file app.js. Run the server using:
`node server.js`

## Defining Routes
Create routes in your application. Test the routes using Postman, for example:

GET: localhost:3000
GET: localhost:3000/pedidos

### Middleware Setup

Ensure to set up middleware for handling JSON body parsing and enabling CORS. Install the necessary packages:

`npm install --save body-parser`



## Database Connection
Connect your Node.js application to a MySQL database. Use the following command to install the required package:

`npm install --save mysql`

Define your database schema, for example:


`CREATE TABLE usuarios(
  id_usuario INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(100),
  senha VARCHAR(100)
);` 

## User Authentication
For user authentication, install the bcrypt and jsonwebtoken packages:

`npm install --save bcrypt jsonwebtoken`


Implement user authentication using bcrypt for password hashing and JSON Web Tokens for secure user sessions.
