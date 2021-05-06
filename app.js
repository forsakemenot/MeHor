const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();


const users = require('./routes/usersRoute.js');
const config = require('./config.js');
const dorm = require('./routes/dormRoute.js')

const MONGODB_URI = config.mongodburi || 'mongodb://localhost/basic-mern-app';
const PORT = process.env.PORT || 8080;

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
});

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (error) => {
    console.log(error);
});

let app = express();

// Body Parser Middleware
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(express.static('public'))
// app.use(express.static(path.join(__dirname, 'client/build')));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "PUT, POST, DELETE, GET, PATCH");
    if (req.method === 'OPTIONS') {
        res.header("Access-Control-Allow-Methods", "PUT, POST, DELETE, GET, PATCH");
        return res.status(200).json({});
    }
    next();
});

app.use('/api/users', users);
app.use('/api/dorm', dorm);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

app.listen(PORT, () => {
    console.log('Server started on port', PORT);
});
