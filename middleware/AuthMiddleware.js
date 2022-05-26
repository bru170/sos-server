const {verify} = require("jsonwebtoken")

const validateJWT = (request, response, next) => {
  const accessToken = request.header("accessToken")
  if (!accessToken)
    return response.json({error: "You are not logged in, please login before continuing!"})

  try {
    const validatedToken = verify(
      accessToken,
      "ssxMaSfmret9E0D6aKwPm4FV3oPZdo8ggHYH5Gy1JhTb8HrtX97cSeWxGQ8j2yKMwiWKlz00GTJ9LwodvwIPZSTMqQ3xQKa0wVXo"
    )
    request.user = validatedToken

    if (validatedToken) {
      return next()
    }
  } catch (err) {
    return response.json({error: err})
  }
}

module.exports = {validateJWT}
