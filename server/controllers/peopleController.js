const axios = require('axios')
const changeEncoding = require('../encoding/changeEncoding')

class peopleController {

    getAll(req, res) {
        try {
                res.json('work')
            
        } catch (e) {
            res.status(400).json({ message: 'peopleController error' })
        }
    }

    getOne(req, res) {
        try {
            const id = req.params.id
            const {encoding} = req.query // ewok
            
            axios.get(`https://swapi.dev/api/people/${id}/`)
            .then((response) => {
                
                const data = response.data

                if (encoding === 'ewok') {
                    changeEncoding.ewok(data)
                }

                res.json(data)
            })

        } catch (e) {
            res.status(400).json({ message: 'peopleController error' })
        }
    }



}

module.exports = new peopleController()