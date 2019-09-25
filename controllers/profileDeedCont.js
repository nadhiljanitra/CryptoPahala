const profileDeedModel = require('../models').ProfileDeed
const profileModel = require('../models').Profile
const DeedModel = require('../models').Deed

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





}

module.exports = ProfileDeed