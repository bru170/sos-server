const express = require("express")
const app = express()
const cors = require("cors")

var corsOptions = {
  origin: "http://localhost:3001"
}

const db = require("./models")

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Listening on port 3001")
  })
})

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: true}))
