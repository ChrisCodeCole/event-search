const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();
connectDB();

// Init middleware
app.use(express.json({ extended: false })); // allows us to get the data into request.body in users route

//Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

const PORT = process.env.PORT || 5000; //looks for env var called port (when deployed to Heroku), if none then locally users port 5000
app.listen(PORT, () => console.log(`server started on port: ${PORT}`));
