const profileModel = require('../models').Profile
const DeedModel = require('../models').Deed
const hashPassword = require('../helpers/hashPassword')

class Profile{

  static create(req,res){
    profileModel.create({
      username : req.body.username,
      password : req.body.password,
      email : req.body.email,
      login : 0 
    })
    .then(success=>{
      profileModel.findOne({where:{username:req.body.username}})
      .then(row=>{
        res.redirect(`/profile/${row.dataValues.id}/form`)
      })
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
    let profileId
    profileModel.findOne({where:{username:req.body.username}})
    .then(row=>{
      if(row){
        let newHash = hashPassword(req.body.password,row.salt)
        if(newHash===row.password){
          profileId = row.id
          profileModel.update({login:1},{where:{username:req.body.username}})
          .then(row=>{
            res.redirect(`${profileId}/userpage`)
          })
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

  static viewProfile(req,res){
    profileModel.findAll({where:{id:req.params.id},include:[DeedModel]})
      .then(profile=>{
        let data = profile[0]
        let input = profile[0]
        let score = 0
        
        for ( let i = 0; i < input.dataValues.Deeds.length; i++){
          score += input.dataValues.Deeds[i].rating
        }
        profileModel.update({score:score},{where:{id:req.params.id}})
          .then(result => {
            res.render("profile/userPage",{data: data, subjectId: req.params.id})
          })
          .catch()
      })
      .catch(err => res.send(err))
  }

}

module.exports = Profile;