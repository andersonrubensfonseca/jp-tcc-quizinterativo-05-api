const App = require('./app')
const http = require('http')


const app = new App()

const server = http.createServer(app.server)


server.listen(3333,()=>{
    console.log('Running...')
})