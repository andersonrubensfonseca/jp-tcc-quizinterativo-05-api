const path = require('path');
const {Router} = require('express');
const routers = new Router()
const UsersController = require('./controllers/UsersController')
const AuthController = require('./controllers/AuthController')

const usersController = new UsersController();
const authController = new AuthController();

routers.get('/', (req,res)=>{
    res.send('funciona')
});

routers.post('/login',authController.login)

routers.get('/users',usersController.index)
routers.post('/users',usersController.create)

module.exports = routers;