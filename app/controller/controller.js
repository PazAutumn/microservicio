exports.test = function(req, res) {
    var obj = {
        "nombre": "Morgan",
        "color": "crema",
        "edad": "5",
        "tamaño": "mediano",
        "tipoPelo": "corto"
    }
    //res: respuesta
    res.status(200).send(obj);
}