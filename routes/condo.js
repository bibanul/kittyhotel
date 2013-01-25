
/*
 * GET Condo API.
 */

module.exports = function (app) {
    var condoModel = require('../models/condo');
    
    app.get('/api/condos', function (req, res, next) {
    return condoModel.find(function (err, condos) {
        if (!err) {
          return res.send(condos);
        } else {
          return console.log(err);
        }
      });
    });
    
    app.get('/api/condos/:id', function (req, res, next) {
        return condoModel.findById(req.params.id, function (err, condo) {
            if (!err) {
              return res.send(condo);
            } else {
              return console.log(err);
            }
      });
    });
    
    app.post('/api/condos', function (req, res, next) {
        var condo;
        console.log('POST: ');
        console.log(req.body);
        condo = new condoModel({
           roomNumber: req.body.roomNumber 
        });
        
        condo.save(function (err){
            if (!err) {
              return console.log("created");
            } else {
              return console.log(err);
            }
        });
        return res.send(condo);
    });
    
     app.put('/api/condos/:id', function (req, res, next) {
         return condoModel.findById(req.params.id, function (err, condo) {
            condo.roomNumber = req.body.roomNumber;
            
            return condo.save(function (err){
                if (!err) {
                  console.log("created");
                } else {
                  console.log(err);
                }
            return res.send(condo);
            });
         });
    });
};
