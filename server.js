if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express') // import express
const app = express()
const expressLayouts = require('express-ejs-layouts')

const indexRouter = require('./routes/index') // relative path

app.set('view engine', 'ejs') // set view engine, set ejs
app.set('views', __dirname + '/views') // set where views are coming from in this case it will be views directory 
app.set('layout', 'layouts/layout') // every single file is going to be put inside this layout file
app.use(expressLayouts) // using the library 
app.use(express.static('public')) // public file of where the style sheets will be 

// mongodb
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true
})
const db = mongoose.connection
// error handling 
db.on('error', error => console.error(error))
// on connecting for the first time
db.once('open', () => console.log('Connected to Mongoose'))


app.use('/', indexRouter)

// wanting the app to listen on a certain port
app.listen(process.env.PORT || 3000) // pull from an environment variable 