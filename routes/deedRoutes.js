const routes = require('express').Router()
const Deed = require('../controllers/deedCont')

routes.get('/', Deed.generateForm)

// routes.get('/form', (req,res) => {
//   res.render('form')
// })

module.exports = routes