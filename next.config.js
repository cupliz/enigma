require('dotenv').config()
const nextConfig = {
  // generateSw: false,
  // dontAutoRegisterSw: true,
  // workboxOpts: {
  //   runtimeCaching: [
  //     {
  //       urlPattern: /.png$/,
  //       handler: 'CacheFirst'
  //     },
  //     {
  //       urlPattern: /api/,
  //       handler: 'NetworkFirst',
  //       options: {
  //         cacheableResponse: {
  //           statuses: [0, 200],
  //           headers: {
  //             'x-test': 'true'
  //           }
  //         }
  //       }
  //     }
  //   ]
  // },
  env: {
    VERSION: process.env.VERSION,
  },
}

module.exports = nextConfig