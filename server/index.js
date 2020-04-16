const server = require('./server')

const port = process.env.PORT

server.listen(port, function () {
  // eslint-disable-next-line no-console
  console.log('Listening on port', port)
})
