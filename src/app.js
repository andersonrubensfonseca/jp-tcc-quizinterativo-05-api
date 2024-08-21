const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const routers = require('./routes')

class App{
    constructor(){
        this.server = express();
        this.middlewares()
        this.routes()
    }

    middlewares(){
        this.server.use(express.json())
        this.server.use(cors())
        this.server.use(helmet())
    }

    routes(){
        this.server.use(routers);
    }
}

module.exports=App;