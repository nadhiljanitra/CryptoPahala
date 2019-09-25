const ProfileModel = require('../models').Profile
const DeedModel = require('../models').Deed
const ProfileDeedModel = require('../models').ProfileDeed
const Sequelize = require('sequelize');

class Chart {
  static showLeaderboard(req, res) {
    ProfileModel.findAll({
        order: [
          ['id', 'DESC']
      ]
    })
      .then(leaderboard => {
        res.render('./chart/leaderboard', {leaderboard: leaderboard})
      })
      .catch(err => res.send(err))
  }

  static sortByFreq(req, res) {
    console.log('masuk');
    ProfileDeedModel.findAll({
      group: ['DeedId'],
      attributes: ['DeedId', [Sequelize.fn("COUNT", Sequelize.col("DeedId")), "DeedCount"]]
    })
      .then(sortResult => {
        res.send(sortResult)
      })
      .catch(err => res.send(err))
  }
}

module.exports = Chart