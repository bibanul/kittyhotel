
/*
 * GET Condo API.
 */

module.exports = function (app) {
   app.get('/api/condos', function (req, res, next) {
      var condo = require('./models/condoModel');
      return condo.find(function (err, condos) {
        if (!err) {
          return res.send(condos);
        } else {
          return console.log(err);
        }
      });
    });
    
    //app.post
};
