const gateway = require('fast-gateway')
const server = gateway({
  routes: [{
    prefix: '/customer',
    target: 'http://127.0.0.1:5000'
  },
  {
    prefix: '/product',
    target: 'http://127.0.0.1:6000'
  }
]
})

server.start(8080,()=>{ console.log("server run on 8000");})