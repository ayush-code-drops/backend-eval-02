const express = require('express');
const app = express();
const port = 9000;
const connectToDb=require('./mongoDb')
app.listen(port, () => {
   new connectToDb();
    console.log('Server is running on port 9000');
})


