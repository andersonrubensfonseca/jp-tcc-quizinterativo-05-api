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
routers.get('/users/:id', usersController.update)
routers.delete('/users/:id', usersController.delete)

routers.get('/quiz',quizController.index)
routers.post('/quiz',quizController.create)
routers.get('/quiz/:id', quizController.update)
routers.delete('/quiz/:id', quizController.delete)


module.exports = routers;