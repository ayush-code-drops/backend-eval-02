const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let savingAc = new Schema(
    {
       "masterId":{type: mongoose.Schema.Types.ObjectId, ref: 'masterAccounts'},
        "account_number": { type: Number, minlength: 10, required: true },
        "balance":{type:Number,required:true},
        "interestRate": { type: Number, required: true, min: 2, max: 6},
        "createdAt": { type: Date, default: Date.now },
        "updatedAt": { type: Date, default: Date.now} 
    }
)

module.exports=mongoose.model('savingAccounts',sav)