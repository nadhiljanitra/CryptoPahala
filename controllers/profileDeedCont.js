const profileDeedModel = require('../models').ProfileDeed

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
        .then(success => console.log(`adding deedId ${deedId} success`))
        .catch(err => console.log(err))
    })

    res.send('successfully stored values')
  }
}

module.exports = ProfileDeed