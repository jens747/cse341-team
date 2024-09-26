const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

app.use(cors()); 

app.get('/professional', (req, res) => {
    res.json({
        professionalName: "Joseph Smith",
        nameLink: {
            firstName: "Joseph",
            url: "https://www.josephsmithpapers.org/articles/joseph-smith-and-his-papers-an-introduction",
        },
        primaryDescription: "Joseph Smith Jr. was an American religious leader and the founder of Mormonism and the Latter Day Saint movement. Publishing the Book of Mormon at the age of 24, Smith attracted tens of thousands of followers by the time of his death fourteen years later.",
        workDescription1: "American religious leader.",
        workDescription2: "Prophet and President of The Church of Jesus Christ of Latter-day Saints",
        linkTitleText: "Learn more about Joseph Smith",
        linkedInLink: {
            text: "View LinkedIn",
            link: "https://www.linkedin.com/feed/"
        },
        githubLink: {
            text: "View GitHub",
            link: "https://github.com/"
        }
    });
    console.log("Request worked!")
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});