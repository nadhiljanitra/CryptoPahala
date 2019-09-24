const routes = require('express').Router()
const Profile = require('../controllers/profileCont')
let err=null

routes.get('/add',(req,res)=>{
  res.render('./profile/profileAdd',{err})
})
routes.post('/add',Profile.create)
routes.get('/login',(req,res)=>{
  res.render('./profile/profileLogin',{err})
})
routes.post('/login',Profile.login)



// routes.get('/form',(req,res)=>{
//   res.render('form')
// })



module.exports = routes;