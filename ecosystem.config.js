module.exports = {
    apps : [{
      name        : "server",
      script      : "./dist/server.js",
      watch       : true,
      env: {
        "NODE_ENV": "production",
        "PORT":"8080"
      }
    }]
  }