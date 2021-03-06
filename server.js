const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const users = require('./controllers/users');
const calendar = require('./controllers/calendar');

// Middleware for CORS.
app.use(cors());

// Middleware for bodyparsing using both json and urlencoding.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));

// Using 3000 as the port to listen to.
const port = 3000;

app.get('/', (req, res) => {
    /**
     * The root directory of the server.
     * Send back 'Root' because the directory shouldn't be available for use.
     */
    res.send('Root');
});

// Route the users api to the users route controller.
app.use('/api/users', users);

app.use('/api/calendar', calendar);

// Listen on port = 3000.
app.listen(process.env.PORT || port, () => {
    console.log(`Starting the server at port ${port}`);
});