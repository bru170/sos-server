const express = require("express")
const router = express.Router()
const {Users} = require("../models")
const bcrypt = require("bcrypt")

const {sign} = require("jsonwebtoken")

router.post("/", async (request, response) => {
  const {username, fullName, email, password} = request.body
  bcrypt.hash(password, 10).then((hash) => {
    Users.create({
      username: username,
      fullName: fullName,
      email: email,
      password: hash
    })
    response.json("User added!")
  })
})

router.post("/login", async (req, res) => {
  const {username, password} = req.body

  const user = await Users.findOne({where: {username: username}})

  if (!user) {
    res.json({error: "User Doesn't Exist"})
  } else if (user) {
    bcrypt.compare(password, user.password).then((match) => {
      if (!match) {
        res.json({error: "Wrong Username And Password Combination"})
      } else {
        const authToken = sign(
          {username: user.username, id: user.id},
          "PyLC59WCs6Ge9G9Mp6Yx0Qp6vowQ2HE8E4olyc2aZkipMTTVqlS1hfRtMJub4P2odnLEsqsDTEN63tW8aiOlxOCX40PhZU56jr5c"
        )
        res.json("YOU LOGGED IN!!!")
      }
    })
  }
})

module.exports = router
