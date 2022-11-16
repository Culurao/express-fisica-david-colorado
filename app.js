require ('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const hbs = require('hbs')
const port = process.env.PORT
//Especificar el directorio público
app.use(express.static('public'));

hbs.registerPartials(__dirname + '/views/partials', function(err) {})
app.set("view engine", 'hbs')
app.set('views', __dirname + '/views')

app.get('/home', (req, res) =>{  
    res.render('home', {
        nombre: 'home'
    })
});

//Verificar si el puerto está siendo escuchado
app.listen(port, () => {
    console.log(`Escando por el puerto ${port}`)
})

app.get('/contacto', (req, res) =>{
    res.render('contacto', {
        nombre: 'contacto'
    })
})

app.get('/login', (req, res) =>{  
    res.render('login', {
        nombre: 'login'
    })
});

app.get('/calculoPeso', (req, res) =>{  
    res.render('calculoPeso', {
        nombre: 'calculoPeso'
    })
});


app.get('*', (req, res) =>{
    res.render('404', {
        nombre: 'Pagina no encontrada'
    })
})