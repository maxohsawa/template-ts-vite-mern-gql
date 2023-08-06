const express = require('express')
const path = require('path')

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'dist')))

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Express API server running on port ${PORT}`)
})