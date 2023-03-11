let express = require('express'); //Se importa la dependencia
let app = express(); // se declara una App de express

// Se indica a la app de express que su template engine sera ejs 
app.set('view engine', 'ejs'); 

/*Template engine ---> implementación de software que permite
mezclar datos con una plantilla con el fin de generar un documento
que será renderizado en el navegador*/

/* Aplicación express especifica el directorio virtual '/assets'  ----> contenido estatico 
mapeado a ----> carpeta fisica '/public' */
app.use('/assets', express.static(__dirname + '/public'));

let port = process.env.PORT || 3000; //setteamos el puerto para que escuche el servidor

//Ruta person recibe parametro desde la ruta un numero. determina si es par o impar
app.get('/person/:id', function(req, res) {
        //se utiliza la etiqueta link para hacer referencia al directorio virtual y a la hoja de estilo
    res.render('person', {ID: req.params.id}); 
});

//Array que se pasará como parametro a la ruta <<personas>>
let data = [
    {id: 1, nombre: "Hugo", apellido: "Estrada Ramirez", edad: 19}, 
    {id: 2, nombre: "Estela", apellido: "Perez Suarez", edad:18},
    {id: 3, nombre: "Sabrina", apellido: "Contreras Morales", edad:17}
];

//Ruta personas, renderiza una vista de un array enviado como parametro
app.get('/personas', function (req,res){
    res.render('personas', {data}); 
});

app.listen(port); //Levantar el server y ponerlo a la escucha