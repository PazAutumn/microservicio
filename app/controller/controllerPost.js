exports.test = function(req, res) {
    var k = req.body.key;
    var obj = {
        "nombre": "Morgan",
        "color": "crema",
        "edad": "5",
        "tamaño": "mediano",
        "tipoPelo": "corto"
    }
    obj['keySalida'] = k;
    //res: respuesta
    res.status(200).send(obj);
}