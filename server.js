// import the express module
const express = require('express');

/* enable Cross-Origin Resource Sharing (CORS)
   so external domains can access this API */
const cors = require('cors');

/* import MongoClient class from MongoDB Node driver, 
   MongoClient connects to db for querying data */
const MongoClient = require('mongodb').MongoClient;

/* imports custom module from /db/connect.js to run 
   functions from that file that interact with data 
   in the database */
const mongodb = require('./db/connect');

/* import route handler from /routes/professional.js, 
   routes listed here handle requests sent to the API  
   for the /professional endpoint */
const proRoutes = require('./routes/professional');

// initialize the express app
const app = express();

// server listens on this port
const port = process.env.PORT || 8080;

/* replaces app.use(bodyParser.json());
   BodyParser middleware has been incorporated 
   into Express, parsed JSON requests are 
   made available under req.body.*/
app.use(express.json());

/* parses URL-encoded data, like forms, into req.body 
   extended allows rich objects & arrays to be encoded */
// app.use(express.urlencoded({ extended: true }));

// allows cross-origin requests
// i.e.: different server or domain from the origin
app.use(cors());

// Similar functionality to cors
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     next();
//   });

/* registers the routes defined in the proRoutes module 
   to the /professional path, i.e.: a /map route defined 
   in /professional can be accessed with /professional/map */
app.use('/professional', proRoutes);

// Start the server on port and log the message
// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}/`);
// });

/* calls initDb function from imported mongodb, which 
   initializes the db connection, the callback parameters 
   err: returns if error, mongodb: connection is successful, 
   represents the connected MongoDB client or database */
mongodb.initDb((err, mongodb) => {
    if (err) {
        console.log(err);
    } else {
        /* the server will only start listening for requests 
           after a successful connection to the database */
        app.listen(port);
        console.log(`Server connected to DB & running at http://localhost:${port}/`);
    }
});