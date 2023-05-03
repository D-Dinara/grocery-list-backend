const express = require('express');
const app = express();
const routes = require('./GroceryRoutes');
const cors = require('cors')

const mongoose = require('mongoose');
require('dotenv').config();

const PORT = 7000 || process.env.port;

app.use(express.json());
app.use(cors());

mongoose
.connect(process.env.MONGODB_LINK)
.then(() => console.log('MONGO is connected'))
.catch((err) => console.log(err)) 

app.use(routes);

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`)
})
