const express = require('express')
const app = express()
const port = 3000

// index Page
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// feeding Page
app.get('/feeding', (req, res) => {
  res.send('This page is for feeding!')
})

// pee&pooh Page
app.get('/peePooh', (req, res) => {
  res.send('This page is for peePooh!')
})

// sleeping Page
app.get('/sleeping', (req, res) => {
  res.send('This page is for sleeping!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})