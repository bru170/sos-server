const express = require("express")
const app = express()
const cors = require("cors")

app.use(express.json())
app.use(cors())

const db = require("./models")

//Routes

const postRouter = require("./routes/Posts")
app.use("/posts", postRouter)

const peopleRouter = require("./routes/People")
app.use("/people", peopleRouter)

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Listening on port 3001")
  })
})
