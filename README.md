# IntelliMind Campaign Kickstarter Project
This project is a web application made via React and Nodejs. It's purpose is to act as a campaign kickstarter for Intellimind.

## Project Requirements :
1. [Nodejs](https://nodejs.org/en/)
2. [Redis](https://redis.io/download)
3. Create a file named ".env" in the root directory of the project

## .env file format
```
SENDGRID_API_KEY=<token>
SENDER_EMAIL=<email>
PRODUCTION_URL=<url>
```

## Available Scripts
Redis Server should be running before running the project.

### `npm run frontend.dev`
It starts the frontend application in the development mode. Use "localhost:3000" to view the application

### `npm run server.dev`
It starts the backend Nodejs server in the development mode. This server runs on Port 4000.

### `npm run start`
This command runs the whole application in the production environment

### `npm run build`
This command bundles the front end application and creates the frontend production build.

