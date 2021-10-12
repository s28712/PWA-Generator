const withPWA = require('next-pwa')

module.exports = withPWA({
  pwa: {
    dest: 'public',
    skipWaiting: true,
    register: false,
    disable: process.env.NODE_ENV === 'development'
  }
})