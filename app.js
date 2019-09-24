const express = require('express')
const app = express()
const PORT = 3000
const profile = require('./routes/profileRoutes')
const deed = require('./routes/deedRoutes')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))

app.use('/profile',profile)

app.use('/form', deed)

app.get('/', (req, res) => {
  res.render('home')
})
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})