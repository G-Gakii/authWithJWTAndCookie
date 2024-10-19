# User Authentication with Node.js, Express,MongoDB JWT and Cookies

This project demonstrates a user authentication system built with Node.js, Express, MongoDB, and JWT for secure login and registration.

## Prerequisites

- Node.js
- npm
- MongoDB

Getting Started

## Installation

1.Clone the repository: git clone git@github.com:G-Gakii/auth-api.git 2. Install dependencies: npm install

Set up environment variables:

1. Create a .env file in the root directory and add the following:

- PORT=3000
- MONGO_URI=your_mongo_database_uri
- secret token

## Running the Server

- Start the server: npm run dev

- The server will run on http://localhost:3000.

### API Endpoints

1. User registration:

URL: /api/user/register
Method: POST
Description: Registers a new user.
User Login

2. URL: /api/user/login
   Method: POST
   Description: Logs in a user and returns a JWT token.
   Get User Profile

3. URL: /api/user/logout
   Method: POST
   Description: log out user
   Middleware

- CORS: Allows cross-origin requests.
- body-parser: Parses incoming request bodies.
- JWT Verification: Middleware to verify JWT tokens and protect routes.
-

### Dependencies

- Express: Web framework for Node.js.
- Mongoose: MongoDB object modeling for Node.js.
- bcrypt: Library to hash passwords.
- jsonwebtoken: Library to handle JSON Web Tokens (JWT).
- cors: Middleware to enable CORS.
- body-parser: Middleware to parse JSON bodies.
- cookie-parser
- dotenv
