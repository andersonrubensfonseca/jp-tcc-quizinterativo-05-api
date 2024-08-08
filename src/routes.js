const path = require('path');
const {Router} = require('express');
const routers = new Router()
const UsersController = require('../controllers/UsersController')

const usersController = new UsersController();


routers.get('/', (req,res)=>{
    res.sendFile(path.join(_dirmane, '..','public', 'index.html'))
});

routers.get('/users',usersController.index)
routers.post('/users',usersController.create)

module.exports = routers;