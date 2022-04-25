const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let masterAc = new Schema(
    {
        "userId": { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
        "balance": {type:Number, required: true},
        "createdAt": { type: Date, default: Date.now },
        "updatedAt": { type: Date, default: Date.now} 
    }
)

module.exports=mongoose.model('branches')