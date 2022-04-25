const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let user = new Schema(
    {
        "firstName": { type: String, required: true },
        "middleName": { type: String},
        "lastName": { type: String, required: true },
        "age": { type: Number, required: true },
        "email": { required: true },
        "address": { required: true },
        "gender": { default: "Female" },
        "type": { default: "customer" },
        "createdAt": { type: Date, default: Date.now },
        "updatedAt": { type: Date, default: Date.now}    
    }
)

module.exports = mongoose.model('users',user);
