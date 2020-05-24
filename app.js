//requires
//express
const express = require('express');
//mogoose
const mongoose = require('mongoose');




//Init var
const app = express();



//Conexion DB
mongoose.connection
    .openUri('mongodb://localhost:27017/hospitalDB',(err,res)=>{
    if( err ) throw err;

    console.log('DB mongoDB: online');
})






//routes
app.get('/',(req, res, next) =>{
    //peticion 200 pag is ok
    res.status(200).json({
        ok: true,
        mensaje: 'Peticion realizada correctamente'
    })
})


//Listener port 3000
app.listen(3000, () => {
    console.log('Express server in port 3000: only');
})