const deedModel = require('../models').Deed

class Deed {
  static generateForm(req, res) {
    deedModel.findAll()
      .then(result => {
        res.render('profile/profileForm', {deeds: result})
      })
      .catch(err => res.send(err))
  }
}

module.exports = Deed