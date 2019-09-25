const express = require('express')
const app = express()
const PORT = 3000

const profile = require('./routes/profileRoutes')
const chart = require('./routes/chartRoutes')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))
app.use('/static', express.static('assets'))

app.use('/profile',profile)
app.use('/chart', chart)
app.get('/', (req, res) => {
  res.render('home')
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})