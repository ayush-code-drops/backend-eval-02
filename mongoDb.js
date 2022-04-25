const mongoose = require('mongoose');

class Mongo{
    constructor(){
    this.connectwithMongoose()
    }

    connectwithMongoose() {
        mongoose.connect('mongodb://localhost:27017/banking')
        mongoose.connection.once('open', () => {
         console.log('Connection is established');
        })
        
        mongoose.connection.on('error', () => {
            console.log('Connection Failed! Something went wrong');
        })
    }
}

module.exports=Mongo