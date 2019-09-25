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
    deedIdArr.forEach(deedId => {
      profileDeedModel.create({
        ProfileId: profileId,
        DeedId: deedId
      })
      .then(success => {
        res.redirect(`/profile/${profileId}/userpage`)
      })
      .catch(err => console.log(err))
    })
  }

  static sortByDeeds (req, res) {
  }
}

module.exports = ProfileDeed