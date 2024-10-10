//Importar el paquete de Express
const express= require('express');
const path= require('path')
const cors = require('cors'); // Importar cors
const fs = require('fs');
const productsRoutes = require('./src/routes/productsRoutes');


//Crear una aplicacion de express
const app= express();

app.use(express.json());


//Definir el puerto
const port=3000

//Las rutas
app.use('/api/products', productsRoutes)

app.use(express.urlencoded({extended: true}));


//Servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
    }); 
