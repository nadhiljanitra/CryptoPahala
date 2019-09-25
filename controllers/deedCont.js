const deedModel = require('../models').Deed

class Deed {
  static generateForm(req, res) {
    deedModel.findAll()
      .then(result => {
        res.render('profile/profileForm', {deeds: result})
      })
      .catch(err => res.send(err))
  }

  static getValues(req, res) {
    let result = req.body
    
    // next step: compare result with profiledeed and calculate score
  }
}

module.exports = Deed