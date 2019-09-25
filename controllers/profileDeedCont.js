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
      .then(success => {
        console.log('ini looopins============================>')
        // profileModel.setDataValues('score','score total')
        res.redirect(`/profile/${profileId}/userpage`)
      })
      .catch(err => console.log(err))
    })
  }

  static addDeeds(req, res) {
    let profileId = req.params.id

    ProfileDeed.findAll({
      where: {
        ProfileId: profileId
      }
    })
      .then(result => {
        res.send(result)
      })
      .catch(err => res.send(err))
  }

  static deleteDeed(req, res) {
    let profileId = req.params.id
    let subjectId = req.params.subjectid

    profileDeedModel.destroy({
      where: {
        ProfileId: profileId,
        SubjectId: subjectId
      }
    })
      .then(result => res.send(result))
      .catch(err => res.send(err))
  }
}

module.exports = ProfileDeed