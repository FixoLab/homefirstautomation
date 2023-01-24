export default (req, res, next) => {
    res.setHeader('Cache-Control', 's-maxage=31536000, max-age=31536000')
    next()
  }