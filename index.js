// Se requiere el paquete de express
var express = require('express')
var app = express()


//Variables de aplicación
app.set('appName','Centro de Capacitación Técnica')
app.set('port', process.env.PORT || 3000)
app.set('view engine','ejs')

// Configurara la carpeta de static
app.use(express.static('public'))


// Ruta principal
app.get('/', (req, res) => {
    var title = app.get('appName')
    res.render('index.ejs', {title: title} )
})

//RUTA ADMINISTRADOR
app.get('/admin', (req, res) => {
    var title = app.get('appName')+" | Admin"
    res.render('admin.ejs', {title: title} )
})

//nuevas rutas

//RUTA NUESTRA HISTORIA 
app.get('/nuestrahistoria', (req, res) => {
    var title = app.get('appName')+" | Nuestra Historia"
    res.render('nuestrahistoria.ejs', {title: title} )
})
 
//RUTA ACADEMICO 
app.get('/academico', (req, res) => {
    var title = app.get('appName')+"  | academico "
    res.render('academico.ejs', {title: title} )
})

//RUTA ADMISIONES 
app.get('/Admisiones', (req, res) => {
    var title = app.get('appName')+"  | Admisiones "
    res.render('Admisiones.ejs', {title: title} )
})

//RUTA CALENDARIO 
app.get('/Calendario', (req, res) => {
    var title = app.get('appName')+"  | Calendario "
    res.render('Calendario.ejs', {title: title} )
})

//RUTA FORMULARIO
app.get('/formulario', (req, res) => {
    var title = app.get('appName')+"  | Formulario "
    res.render('formulario.ejs', {title: title} )
})

//RUTA CCT-NOTICIAS 
app.get('/CCT-noticias', (req, res) => {
    var title = app.get('appName')+" | CCT-noticias"
    res.render('CCT-noticias.ejs', {title: title} )
})

// Levanta el servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
})
