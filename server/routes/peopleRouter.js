const Router = require('express')
const peopleController = require('../controllers/peopleController')

const router = new Router()


router.get('/', peopleController.getAll)
router.get('/:id', peopleController.getOne)


module.exports = router 