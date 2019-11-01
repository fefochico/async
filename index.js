const express = require('express')
const app = express()
const port = 3000
var routes= require('./src/route/async');

app.use('/async', routes)

app.listen(port, ()=>
    console.log(`App listening on port ${port}!`)
)