# Node.js API Authentication With JWT Tutorial

[YouTube](https://www.youtube.com/watch?v=2jqok-WgelI)

Quickstart `npm start`

Step 1: install express for building the api `npm install express`
Step 2: install nodemon for running on local machine `npm install --save-dev nodemon`
Step 3: create index.js at root
Step 4: create routes folder, creare route files, import routes to index.js
Step 5: setup middlewares in index.js
Step 6: install mongoose for interacting with MongoDB `npm install mongoose`
Step 7: install dotenv for working with .env file `npm install dotenv`
Step 8: setup .env file
Step 9: create model folder, create user model
Step 10: add middleware to able to read body
Step 11: install joi for validation `npm i joi`
Step 12: setup validation in validation.js
Step 13: install bcrypt for hashing passwords `npm i bcryptjs`
Step 14: setup password hash
Step 15: install jwt `npm i jsonwebtoken`
Step 16: generate jwt when user succesfully logs in
Step 17: create verifyToken util for use as middleware on protected routes
Step 18: setup Posts, a sample protected route using new verifyToken midleware
