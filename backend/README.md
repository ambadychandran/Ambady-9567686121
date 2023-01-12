## To run the project locally

Install dependancies.

### ` npm i`

In the project directory, you can run the test:

### `npm run test`

In the project directory, you can run the App:

### `npm run dev`

### `Project running in localhost:5000`

## Tasks

1. Created the RESTful API using NodeJS and ExpressJS

2. Created the endpoints use appropriate HTTP Methods and define the payloads, return codes and response structures

3. Writed unit test cases using Jest and supertest

4. The UI utilises the RESTful services from the NODE JS App

5. Used SQL sqlite in-memory DB to store the information while the API is running

6. Used sequelize ORM to manage database

7. Luhn 10 algorithm is used to validate the credit card number

The Rest API has the following endpoints:

### `/GetAll - GET endpoint that returns a JSON list of all card entries in the API`

### `/Add -  POST endpoint that add card entry.`

An example rest API query that passes:

{
"name": "John Doe",
"cardNumber": "4485275742308327",
"limit": 1000
}

## Tecnologies

**Languages**
`Node.js, javaScript`

**Frameworks / utilities**
`Express.js, Jest, sqlite3, sequelize`
