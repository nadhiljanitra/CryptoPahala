const routes = require('express').Router()
const Chart = require('../controllers/chartCont')

routes.get('/leaderboard', Chart.showLeaderboard)
routes.get('/frequencyofdeeds', Chart.sortByFreq)

module.exports = routes