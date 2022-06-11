const express = require('express');
const mongoose = require('mongoose');
const app = express();


// Constants
const PORT = process.env.PORT || 3333;
const MONGO_URI = "mongodb://mymongo:27017/startapp";


// Database Connection
mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(`ERR: DB Connection Failed ` + err));


app.get('/', (req, res) => res.json({ msg: 'Welcome to the StartApp API' }));

app.listen(PORT, console.log(`Server is running on port ${PORT}`));