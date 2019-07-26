//============================
//  Puerto 
//============================
process.env.PORT = process.env.PORT || 3000;


//============================
//  Entorno 
//============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


//============================
// Base de Datos
//============================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/menu';
} else {
    urlDB = 'mongodb+srv://jeancwp:Jeanclaude100@cluster0-qe8wd.mongodb.net/menu';
}
process.env.URLDB = urlDB;