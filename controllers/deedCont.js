const deedModel = require('../models').Deed

class Deed {
  static generateForm(req, res) {
    deedModel.findAll()
      .then(result => {
        res.render('profile/profileForm', {deeds: result, profileId: req.params.id})
      })
      .catch(err => res.send(err))
  }
}

module.exports = Deed