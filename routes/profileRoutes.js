const routes = require('express').Router()
const Profile = require('../controllers/profileCont')
const Deed = require('../controllers/deedCont')
const ProfileDeed = require('../controllers/profileDeedCont')

const loginMiddleware = (req,res,next)=>{
  if (req.session.user){
    next()
  } else {
    res.redirect('/')
  }
}


let err=null

routes.get('/add',(req,res)=>{
  res.render('./profile/profileAdd',{err})
})
routes.post('/add',Profile.create)

routes.get('/login',(req,res)=>{
  res.render('./profile/profileLogin',{err})
})
routes.post('/login',Profile.login)

routes.get('/:id/form', loginMiddleware,Deed.generateForm)
routes.post('/:id/form', ProfileDeed.storeValues)

routes.get('/:id/userpage',loginMiddleware,Profile.viewProfile)
routes.get('/:id/userpage/delete/:deedid', loginMiddleware,ProfileDeed.deleteDeed)

routes.get('/:id/addDeed',loginMiddleware,ProfileDeed.addDeed)
routes.post('/:id/addDeed',ProfileDeed.updateDeed)

routes.get('/:id/updateProfile',loginMiddleware,Profile.edit)
routes.post('/:id/updateProfile',Profile.update)

routes.get('/:id/deleteProfile',loginMiddleware,(req,res)=>{
  res.render('./profile/deleteProfile',{err})
})

routes.post('/:id/deleteProfile',loginMiddleware,Profile.delete)

routes.get('/logout',loginMiddleware,Profile.logout)



module.exports = routes;