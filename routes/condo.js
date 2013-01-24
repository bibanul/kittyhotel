
/*
 * GET Condo API.
 */

module.exports = function (app, db) {
    app.get('/api/condos', function (req, res, next) {
    var condoModel = require('../models/condo')(db);

    return condoModel.find(function (err, condos) {
        if (!err) {
          return res.send(condos);
        } else {
          return console.log(err);
        }
      });
    });
    
    //app.post
};
