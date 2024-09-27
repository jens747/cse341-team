/* Create a new router obj w/Express's Routher method,  
   Router can define routes (endpoints) for HTTP 
   requests (e.g., GET, POST, etc.) */
const router = require("express").Router();

/* Import professional.js controller module (proController), 
   module has methods mapped to routes & actions, like 
   fetching data, creating, updating or deleting records */
const proController = require("../controllers/professional");

/* Defines the GET route on the router, router.get() defines 
   a route that responds to HTTP GET requests. Executes getData 
   method when browser or API client sends a GET request to 
   the root of this router (mount point is /professional/) */
router.get('/', proController.getData);

/* Exports the router object so that it can be used in other 
   parts of the app. Use the following when importing to app.js
   or server.js: require('./routes/professional') */
module.exports = router;