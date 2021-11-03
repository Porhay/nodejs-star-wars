const express = require('express')
require('dotenv').config()
const axios = require('axios');
const peopleRouter = require('./routes/peopleRouter')
const planetsRouter = require('./routes/planetsRouter')


const app = express()

app.use(express.json())
app.use('/people', peopleRouter)
app.use('/planets', planetsRouter)


const PORT = process.env.PORT || 3033



const start = () => {
    try {
        app.listen(PORT, () => console.log(`Server has been started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }    
}


start()
