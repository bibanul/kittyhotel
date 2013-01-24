
/*
 * GET Condo API.
 */

var condoModel = './models/condo.js';

module.exports = function (app) {
    app.get('/api/condos', function (req, res, next) {
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
