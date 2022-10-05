const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "../../client", "build")));

const port = 8080;

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
