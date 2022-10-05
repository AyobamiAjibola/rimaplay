const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "../../client", "build")));

app.get("/welcome", (req, res) => {
    res.status(200).send({ data: "Welcome Skyline"});
  });

const port = 8080;

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});