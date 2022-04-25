const express = require('express');
const app = express();
const port = 9000;
const connectToDb = require('./mongoDb')
const bodyParser = require('body-parser');
const savingAccModel=require('./Models/savingAcc')
const masterAccModel=require('./Models/masterAcc')
const fixedAccModel=require('./Models/fixedAcc')
const userModel=require('./Models/user')
const branchModel = require('./Models/branch');

app.use(bodyParser.json())
app.listen(port, () => {
   new connectToDb();
    console.log('Server is running on port 9000');
})
//to create Saving Acount

app.post('/savingAcc', async (req, res, next) => {
    try {
        let accDetials = req.body;
        let response = await savingAccModel.insertOne(accDetials);
        res.json(req.body);   
    }
    catch (error) {
        res.status(500).send(error)
    }
   
})

//to create Fixed Account
app.post('/fixedAcc', async (req, res, next) => {
    try {
        let accDetials = req.body;
        let response = await fixedAccModel.insertOne(accDetials);
        res.json(req.body);   
    }
    catch (error) {
        res.status(500).send(error)
    }
   
})



