const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;


app.use(express.json())

app.use(express.urlencoded({ extended: true }));


app.use('/repositories', require('./routes/repositories'));


app.listen(port, () => {
    console.log(`App listening on port: ${port}`)
})