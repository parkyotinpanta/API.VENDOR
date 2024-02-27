const express = require('express')
const app = express()
const port = 3000
const router = require('./router')


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.raw());


app.use('/api',router)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})