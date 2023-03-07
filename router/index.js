const express = require('express');
const router = express.Router();
const bodyParser = require ('body-parser');


router.get('/CFE',(req,res)=>{
    const valores ={
        numBoleto: req.query.numBoleto,
        nombre: req.query.nombre,
        domicilio: req.query.domicilio,
        tipoServicio: req.query.tipo,
        kilowatts: req.query.kwConsumidos,
        subtotal: req.query.subtotal,
        descuento: req.query.descuento,
    }
    res.render('compañialuz.html',valores)

})

router.post('/CFE',(req,res)=>{
    const valores ={
        numBoleto: req.body.numBoleto,
        nombre: req.body.nombre,
        domicilio: req.body.domicilio,
        tipoServicio: req.body.tipo,
        kilowatts: req.body.kwConsumidos,
        subtotal: req.body.subtotal,
        descuento: req.body.descuento,
    }
    res.render('compañialuz.html', valores)
})


router.get('/factura',(req,res)=>{
    const valores ={
        numBoleto: req.query.numBoleto,
        nombre: req.query.nombre,
        domicilio: req.query.domicilio,
        tipoServicio: req.query.tipo,
        kilowatts: req.query.kwConsumidos,
        subtotal: req.query.subtotal,
        descuento: req.query.descuento,
    }
    res.render('factura.html',valores)

})

router.post('/factura',(req,res)=>{
    const valores ={
        numBoleto: req.body.numBoleto,
        nombre: req.body.nombre,
        domicilio: req.body.domicilio,
        tipoServicio: req.body.tipo,
        kilowatts: req.body.kwConsumidos,
        subtotal: req.body.subtotal,
        descuento: req.body.descuento,
    }
    res.render('factura.html', valores)
})



module.exports=router;
