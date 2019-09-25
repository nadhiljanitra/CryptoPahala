const routes = require('express').Router()
const Profile = require('../controllers/profileCont')
const Deed = require('../controllers/deedCont')
const ProfileDeed = require('../controllers/profileDeedCont')

let err=null

routes.get('/add',(req,res)=>{
  res.render('./profile/profileAdd',{err})
})
routes.post('/add',Profile.create)

routes.get('/login',(req,res)=>{
  res.render('./profile/profileLogin',{err})
})
routes.post('/login',Profile.login)

// tampilin form yg perlu diisi
routes.get('/:id/form', Deed.generateForm)
// ambil ProfileId sama list of deeds -> masukin ke db profileDeed
routes.post('/:id/form', ProfileDeed.storeValues)

module.exports = routes;