
var controller = require('../controller/controller');
var controllerPost = require('../controller/controllerPost');


module.exports = function (app) {
    app.get('/servicios/microservicios/test/v1.0/controller', controller.test);
    app.post('/servicios/microservicios/test/v1.0/controllerPost', controllerPost.test);
}