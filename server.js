const express = require("express");
const db = require('./database/db.js');
const { expressSession, pgSession } = require('./session');
const eventsController = require('./controller/events')
//const usersController = require('./controller/users');

const port = process.env.PORT || 3001; // Note: using a different port to normal

const app = express();

app.use(express.json());
app.use(express.static("./client/build"));

app.use(
  expressSession({
    store: new pgSession({
      pool: db, // Connects to our postgres db
      createTableIfMissing: true, // Creates a session table in your database (go look at it!)
    }),
    secret: process.env.EXPRESS_SESSION_SECRET_KEY,
  })
);

app.use('/', eventsController);
//app.use('/', usersController);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});