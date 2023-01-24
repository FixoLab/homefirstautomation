import cacheControl from './cacheControl'

const server = express()

server.use(cacheControl)

server.get('*', (req, res) => {
  return handle(req, res)
})