var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.render('Listado Usuario');
    var usuarios=[
        {
            usuario:"pepe",
            email:"pepe@gmail.com"
        },{
            usuario:"Manolito",
            email:"Manolito@gmail.com"
    }
    ];
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(usuarios));
    
});

router.post("/", function(req, res, next){
    res.send("Añadir usuario");
    var user=req.body;
});
    
router.get("/:id", function(req, res, next){
    res.send("Mostrar usuario" + req.params.id);
});

router.post("/:id", function(req, res, next){
    res.send("Modificar usuario" + req.params.id);
});

router.get("/delete/:id", function(req, res, next){
    res.send("Borrar usuario" + req.params.id);
});
module.exports = router;