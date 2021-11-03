const axios = require('axios')

const changeEncoding = require('../encoding/changeEncoding')

class planetsController{
    getOne(req, res) {
        try {
            const id = req.params.id
            const {encoding} = req.query // ewok
 
            axios.get(`https://swapi.dev/api/planets/${id}/`)
            .then((response) => {
                
                const data = response.data

                if (encoding === 'ewok') {
                    changeEncoding.ewok(data)
                }

                res.json(data)
            })

        } catch (e) {
            res.status(400).json({ message: 'planetsController error' })
        }
    }
}

module.exports = new planetsController()