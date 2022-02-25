const express = require("express")
const router = express.Router()
const {Posts} = require("../models")

router.get("/", async (request, response) => {
  const allPosts = await Posts.findAll()
  response.json(allPosts)
})

router.post("/", async (request, response) => {
  const post = request.body
  await Posts.create(post)
  response.json(post)
})

module.exports = router
