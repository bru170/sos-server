const express = require("express")
const router = express.Router()
const {Users} = require("../models")
const bcrypt = require("bcrypt")
const {validateJWT} = require("../middleware/AuthMiddleware")
const {sign} = require("jsonwebtoken")

router.post("/", async (request, response) => {
  const {firstname, lastname, email, username, password} = request.body
  bcrypt.hash(password, 10).then((hash) => {
    Users.create({
      username: username,
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: hash
    })
    response.json("SUCCESS")
  })
})

router.post("/login", async (request, response) => {
  const {username, password} = request.body

  const user = await Users.findOne({where: {username: username}})

  if (!user) response.json({error: "User does not exist"})

  bcrypt.compare(password, user.password).then((match) => {
    if (!match) response.json({error: "Wrong Password"})
    const accessToken = sign(
      {username: user.username, id: user.id},
      "ssxMaSfmret9E0D6aKwPm4FV3oPZdo8ggHYH5Gy1JhTb8HrtX97cSeWxGQ8j2yKMwiWKlz00GTJ9LwodvwIPZSTMqQ3xQKa0wVXo"
    )
    response.json(accessToken)
  })
})

router.get("/authUser", validateJWT, (request, response) => {
  response.json(request.user)
})

module.exports = router
