const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello fellas, are we gonna have a meeting today???')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 
