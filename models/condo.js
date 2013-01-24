
exports = function(db){
    var condoSchema = db.Schema({
        roomNumber: String  //the unique condo room number to refer to
    });
    
    return db.model('Condo', condoSchema);
}