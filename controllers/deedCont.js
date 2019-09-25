const deedModel = require('../models').Deed

class Deed {
  static generateForm(req, res) {
    deedModel.findAll()
      .then(result => {
        // console.log(deeds, req.params.id);
        // res.send(req.params.id)
        res.render('profile/profileForm', {deeds: result, profileId: req.params.id})
      })
      .catch(err => res.send(err))
  }
}

module.exports = Deed