require('dotenv').config()
const withOffline = require('next-offline')
const nextConfig = {
  // generateSw: false,
  // dontAutoRegisterSw: true,
  workboxOpts: {
    runtimeCaching: [
      {
        urlPattern: /.png$/,
        handler: 'CacheFirst'
      },
      {
        urlPattern: /api/,
        handler: 'NetworkFirst',
        options: {
          cacheableResponse: {
            statuses: [0, 200],
            headers: {
              'x-test': 'true'
            }
          }
        }
      }
    ]
  },
  env: {
    TEST_VAR: process.env.TEST_VAR,
  },
}

module.exports = withOffline(nextConfig)