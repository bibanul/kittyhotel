var db = require('mongoose');

var condoSchema = new db.Schema({
        roomNumber: String
    });
    
module.exports = db.model('Condo', condoSchema);
