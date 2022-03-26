const express = require("express")
const router = express.Router()
const {Posts} = require("../models")

router.get("/", async (request, response) => {
  const allPosts = await Posts.findAll()
  response.json(allPosts)
})

router.get("/postById/:id", async (request, response) => {
  const id = request.params.id
  const post = await Posts.findByPk(id)
  response.json(post)
})

router.get("/featuredPosts", async (request, response) => {
  const featuredPosts = await Posts.findAll({
    limit: 3,
    order: [["createdAt", "DESC"]]
  })
  response.json(featuredPosts)
})

router.post("/", async (request, response) => {
  const createPost = request.body
  await Posts.create(createPost)
  response.json(createPost)
})

module.exports = router
