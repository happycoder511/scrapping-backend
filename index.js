require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const scrapping = require('./api/scrapping');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(scrapping);
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.json());
app.listen(process.env.PORT, () => console.log(`Server is running on the port ${process.env.PORT}`))
