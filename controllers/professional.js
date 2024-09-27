const mongodb = require("../db/connect");

const getData = async (req, res, next) => {
  try {
    const db = mongodb.getDb();
    console.log("Connected to database: ", db.databaseName);
    const result = await db.collection("user").find();
    const data = await result.toArray();
    console.log("Data retrieved", data);
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(data[0]); 
  } catch (err) {
    res.status(500).json({ error: "An error occurred while fetching data."});
  }
};

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