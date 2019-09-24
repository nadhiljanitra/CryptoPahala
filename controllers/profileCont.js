const profileModel = require('../models').Profile

class Profile{

  static create(req,res){
    profileModel.create({
      username : req.body.username,
      password : req.body.password,
      email : req.body.email 
    })
    .then(success=>{
      res.send('success')
    })
    .catch(err=>{
      res.send(err)
    })


  }




}

module.exports = Profile;