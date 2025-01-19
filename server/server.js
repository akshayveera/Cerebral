
require('dotenv').config();
const express = require('express');
const app = express();
const routes = require('./routes');

const cors = require('cors');
const whitelist = ['http://localhost:3000', 'http://localhost:4200', 'http://localhost:5173'];

// CORS options
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true); // Allow the request
    } else {
      callback(new Error('Not allowed by CORS')); // Deny the request
    }
  }
};

app.use(cors(corsOptions));

app.use(express.json());

app.get('/', (req, res) => { 

    res.json({ message: 'Welcome to the server' });

})

app.use('/api/v1', routes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

