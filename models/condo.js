
exports.condoModel = function(app){
    var condoSchema = app.mongoose.Schema({
        roomNumber: String  //the unique condo room number to refer to
    });
    
    return app.mongoose.model('Condo', condoSchema);
}