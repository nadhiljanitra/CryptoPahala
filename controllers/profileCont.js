const profileModel = require('../models').Profile
const hashPassword = require('../helpers/hashPassword')

class Profile{

  static create(req,res){
    profileModel.create({
      username : req.body.username,
      password : req.body.password,
      email : req.body.email 
    })
    .then(success=>{
      res.send(success)
    })
    .catch(error=>{
      if(error.message=='Validation error: Validation isEmail on email failed'){
        let err='Format email anda salah'
        res.render('./profile/profileAdd',{err})
      } else {
        let err='Username/Email anda telah dipakai, coba lagi'
        res.render('./profile/profileAdd',{err})
      } 
    })
  }

  static login(req,res){
    profileModel.findOne({where:{username:req.body.username}})
    .then(row=>{
      if(row){
        let newHash = hashPassword(req.body.password,row.salt)
        if(newHash===row.password){
          res.send('berhasil login')
        } else {
          let err=`username/password salah`
          res.render('./profile/profileLogin',{err})
        }
      } else{
        let err=`username/password salah`
          res.render('./profile/profileLogin',{err})
      }
    })
    .catch(err=>{
      res.send(err)
    })
  }




}

module.exports = Profile;