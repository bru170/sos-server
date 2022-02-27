const express = require("express")
const router = express.Router()
const {People} = require("../models")

router.get("/", async (request, response) => {
  const allPeople = await People.findAll()
  response.json(allPeople)
})

router.post("/", async (request, response) => {
  const addNewPerson = request.body
  await People.create(addNewPerson)
  response.json(addNewPerson)
})

module.exports = router
