
/*
 * GET API Home/index.
 */
module.exports = function (app){
    app.get('/api', function (req, res, next) {
        res.render('apiindex', { title: 'KittyHotel API' });
    });
}
