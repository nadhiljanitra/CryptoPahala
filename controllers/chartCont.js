const ProfileModel = require('../models').Profile
const DeedModel = require('../models').Deed
const ProfileDeedModel = require('../models').ProfileDeed
const Sequelize = require('sequelize');

class Chart {
  static showLeaderboard(req, res) {
    ProfileModel.findAll({
        order: [
          ['score', 'DESC']
      ]
    })
      .then(leaderboard => {
        console.log(leaderboard);
        res.render('./chart/leaderboard', {leaderboard: leaderboard})
      })
      .catch(err => res.send(err))
  }

  static sortByFreq(req, res) {
    ProfileDeedModel.findAll({
      group: ['DeedId'],
      attributes: ['DeedId', [Sequelize.fn("COUNT", Sequelize.col("DeedId")), "DeedCount"]]
    })
      .then(sortResult => {
        
        console.log('ini sort result ', sortResult);
        
        let deedIdArr = []
        let deedFreqArr = []

        sortResult.forEach(result => {
          deedIdArr.push(result.DeedId)
          deedFreqArr.push(Number(result.dataValues.DeedCount))
        })

        deedFreqArr.sort()

        console.log('ini deedFreqArr ', deedFreqArr);

        DeedModel.findAll({
          where: {
            id: deedIdArr
          }
        })
          .then(result => {
            let deedNamesArr = []

            deedIdArr.forEach(deedId => {
                result.forEach(deedName => {
                  if (deedName.id == deedId) {
                    deedNamesArr.push(deedName.name)
                  }
              })
            })

            let deeds = {deedFreqArr, deedNamesArr}

            console.log(deeds);
            
            res.render('chart/frequencyofdeeds', {deeds})
          })
          .catch(err => {
            console.log(err)
            res.send(err)
          })
        
      })
      .catch(err => {
        console.log(err)
        res.send(err)
      })
  }
}

module.exports = Chart