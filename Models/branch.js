const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let branch = new Schema(
    {
        "name": { required: true },
        "address":{required:true},
        "IFSC": { type: String, required: true },
        "MICR": { type: Number, required: true },
        "createdAt": { type: Date, default: Date.now },
        "updatedAt": { type: Date, default: Date.now} 
    }
)

module.exports=mongoose.model('branches',branch)