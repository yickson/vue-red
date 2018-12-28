module.exports = app => {
  // Log in a user with a username and password
  app.post('http://52.67.70.146/api/login', (request, response) => {
    Users.authenticate(request.body)
      .then(user => {
        response.json(user)
      })
      .catch(error => {
        response.status(401).json({ message: error.message })
      })
  })

  // Get the user of a provided token, if valid
  app.get('http://52.67.70.146/api/login', (request, response) => {
    const currentUser = Users.findBy('token', request.headers.authorization)

    if (!currentUser) {
      return response.status(401).json({
        message:
          'The token is either invalid or has expired. Please log in again.',
      })
    }

    response.json(currentUser)
  })
}
