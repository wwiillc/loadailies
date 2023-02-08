require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose')
const dailiesRoutes = require('./routes/dailies')

const app = express();

app.use((req, res, next) => {
  console.log(req.path, req.method)
})

// middleware
app.use(express.json())

app.use((req, res, next) => {
  res.json({mssg: 'Welcome to the app'})
  next()
})

// routes
app.use('/api/dailies', dailiesRoutes)

// connect to db
mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })

