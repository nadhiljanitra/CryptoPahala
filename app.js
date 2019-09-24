const express = require('express')
const app = express()
const PORT = 3000
const profile = require('./routes/profileRoutes')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))

app.use('/profile',profile)

app.get('/', (req, res) => {
  res.render('home')
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})