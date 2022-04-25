const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let savingAc = new Schema(
    {
       "masterId":{type: mongoose.Schema.Types.ObjectId, ref: 'masterAccounts'},
        "account_number": {type:Number,minlength:10, required: true},
        "createdAt": { type: Date, default: Date.now },
        "updatedAt": { type: Date, default: Date.now} 
    }
)

module.exports=mongoose.model('savingAccounts',savingAc)