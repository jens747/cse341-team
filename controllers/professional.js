const mongodb = require("../db/connect");

/* getData handles incoming HTTP requests, req: data sent 
   by the client, res: sends data back to client, next: 
   callback func used to give control to next middleware 
   in the chain */
const getData = async (req, res, next) => {
  try {
    /* getDB is MongoDB function which retrieves the next 
       MongoDB database instance */
    const db = mongodb.getDb();
    console.log("Connected to database: ", db.databaseName);
    /* Query the MondoDB database instance for all 
       documents in the user collection */
    const result = await db.collection("user").find();
    /* MongoDB returns a cursor, which lazily loads the 
       data, converts the result (cursor) into an array */
    const data = await result.toArray();
    console.log("Data retrieved", data);
    // Tells client that server with respond in JSON format
    res.setHeader("Content-Type", "application/json");
    /* Sets HTTP status (200) success, sends JSON response  
       of first document in the array (data[0]). Can also 
       send whole array. (data instead of data[0])*/
    res.status(200).json(data[0]); 
  } catch (err) {
    /* Set response to HTTP 500 (Internal Server Error), 
       along with a JSON object containing error message */
    res.status(500).json({ error: "An error occurred while fetching data."});
  }
};

// export the getData function
module.exports = { getData };

// const data = {
//   professionalName: "Joseph Smith",
//   nameLink: {
//       firstName: "Joseph",
//       url: "https://www.josephsmithpapers.org/articles/joseph-smith-and-his-papers-an-introduction",
//   },
//   primaryDescription: "Joseph Smith Jr. was an American religious leader and the founder of Mormonism and the Latter Day Saint movement. Publishing the Book of Mormon at the age of 24, Smith attracted tens of thousands of followers by the time of his death fourteen years later.",
//   workDescription1: "American religious leader.",
//   workDescription2: "Prophet and President of The Church of Jesus Christ of Latter-day Saints",
//   linkTitleText: "Learn more about Joseph Smith",
//   linkedInLink: {
//       text: "View LinkedIn",
//       link: "https://www.linkedin.com/feed/"
//   },
//   githubLink: {
//       text: "View GitHub",
//       link: "https://github.com/"
//   }
// }

// exports.getData = (req, res, next) => {
//   // await mongodb call
//   res.status(200).json(data);
// };