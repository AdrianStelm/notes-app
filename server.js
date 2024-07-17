const express = require('express')
const db = require('./db')

const app = express()

const PORT = 3000


app.listen(PORT,async () => {
  console.log("Server is running on port 3000")
  const database = await db()

})

app.get('/',(req, res) => {
  res.send('Hello World!')
})

