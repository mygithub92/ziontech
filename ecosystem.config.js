module.exports = {
    apps : [{
      name        : "server",
      script      : "./server.js",
      watch       : true,
      env: {
        "NODE_ENV": "production",
        "PORT":"8080"
      }
    }]
  }