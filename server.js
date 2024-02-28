const express = require('express')
const app = express()
const port = 3050
const router = require('./router')
var cors = require('cors')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.raw());
app.use(cors())

app.use('/api',router)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})