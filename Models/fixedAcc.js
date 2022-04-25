const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let fixedAc = new Schema(
    {
        "masterId": { type: mongoose.Schema.Types.ObjectId, ref: 'masterAccounts' },
        "account_number": { type: Number, minlength: 10, required: true },
        "balance": { type: Number, minlength: 10, required: true },
        "interestRate": { type: Number, required: true, min: 2, max: 6},
        "startDate":{type:Date,required:true},
        "maturityDate":{type:Date,required:true},
       
        "createdAt": { type: Date, default: Date.now },
        "updatedAt": { type: Date, default: Date.now} 
    }
)

module.exports=mongoose.model('fixedAccounts',fixedAc)