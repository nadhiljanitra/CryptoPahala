const routes = require('express').Router()
const Profile = require('../controllers/profileCont')

routes.get('/add',Profile.create)

// routes.get('/form',(req,res)=>{
//   res.render('form')
// })



module.exports = routes;