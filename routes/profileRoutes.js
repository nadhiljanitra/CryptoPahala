const routes = require('express').Router()
const Profile = require('../controllers/profileCont')
const Deed = require('../controllers/deedCont')

routes.get('/add',(req,res)=>{
  res.render('./profile/profileAdd')
})
routes.post('/add',Profile.create)

routes.get('/form', Deed.generateForm)
routes.post('/form', Deed.getValues)



module.exports = routes;