const Router = require('express')
const planetsController = require('../controllers/planetsController')

const router = new Router()


router.get('/:id', planetsController.getOne)


module.exports = router 