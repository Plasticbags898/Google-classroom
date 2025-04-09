module.exports = {
  apps: [{
    name: 'stealth-proxy',
    script: 'server.js',
    watch: true,
    env: {
      NODE_ENV: 'production',
      PROXY_ROUTE: '/libmath',
      PORT: 3000
    }
  }]
}