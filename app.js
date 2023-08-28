const express = require('express');
const cors = require('cors');
const logger = require('./loggers/morganLogger');
const initialData = require('./initialData/initialData');
const router = require('./routes/router');
const handleServerError = require('./error-handling/serverError');

const PORT = 3000;

const app = express();

app.use(cors());
app.use(logger);
app.use(express.json());
app.use(router);
app.use(handleServerError);

app.listen(PORT, async (err) => {
    if (err) return console.error(err);
    console.log('The server is running');
    await initialData();
});