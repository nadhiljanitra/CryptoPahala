const profileDeedModel = require('../models').ProfileDeed
const DeedModel =require('../models').Deed
const profileModel = require('../models').Profile

class ProfileDeed {

  static storeValues (req, res) {
    let result = req.body
    let profileId = req.params.id
    let deedIdArr = []
    for(let key in result) {
      deedIdArr.push(Number(key))
    }
    const promises = []
    deedIdArr.forEach(deedId => {
      promises.push(profileDeedModel.create({
        ProfileId: profileId,
        DeedId: deedId
      }))
    })
    
    Promise.all(promises)
    .then(success => {
      console.log('ini looopins============================>')
      // profileModel.setDataValues('score','score total')
      res.redirect(`/profile/${profileId}/userpage`)
    })
    .catch(err => console.log(err))
  }

  
  static deleteDeed(req, res) {
    profileDeedModel.destroy({
      where: {
        ProfileId: req.params.id,
        DeedId: req.params.deedid
      }
    })
    .then(result => {
      // console.log(result)
      res.redirect(`/profile/${req.params.id}/userpage`)})
    .catch(err => {
      res.send(err)})
  }

  static addDeed(req, res) {
    let data
    profileDeedModel.findAll({where:{ProfileId : req.params.id}},{include:profileModel})
    .then(rows=>{
      data = rows
      return DeedModel.findAll()
    })
    .then(deeds=>{
      let profileId = req.params.id
      let check = false
      res.render('./profile/updateForm',{data,deeds,profileId,check})
    })
    .catch(err=>{
      res.send(err.message)
    })
  }

  static updateDeed(req,res){
    profileDeedModel.destroy({where:{ProfileId : req.params.id}})
    .then(data=>{
      ProfileDeed.storeValues(req,res)
    })
    .catch(err=>{
      res.send(err)
    })
  }


}

module.exports = ProfileDeed