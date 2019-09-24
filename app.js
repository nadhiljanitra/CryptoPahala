const express = require('express')
const app = express()
const PORT = 3000

app.use(express.urlencoded({
  extended: true
}))
app.set('view engine', 'ejs')

const Model = require('./models')

app.get('/', (req, res) => {
  res.sen
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})