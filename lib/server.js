const axios = require('axios')
const config = require('../config')

async function forward(ctx) {
  const options = ctx.request.body

  if (!config.secretList.includes(options.secret)) {
    // Should return 401 (Bad request), return 404 for safe.
    throw { status: 404, error: 'Not found.' }
  }
  delete options.secret

  // TODO Be careful. It's related with privacy.
  // console.log(new Date().toJSON(), JSON.stringify(options))

  try {
    const result = await axios(options)
    ctx.body = result.data
    
  } catch(e) {
    if (e.response && e.response.data) {
      ctx.body = e.response.data
    } else {
      const error = e.message || JSON.stringify(e)
      ctx.body = { error }
    }
  }
}

module.exports = {
  forward,
}