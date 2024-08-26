const path = require('path');
const {Router} = require('express');
const routers = new Router()
const UsersController = require('./controllers/UsersController')
const AuthController = require('./controllers/AuthController')
const RespostasController = require('./controllers/RespostasController')
const PerguntasController = require('./controllers/PerguntasController')
const QuizController = require('./controllers/QuizController')

const usersController = new UsersController();
const authController = new AuthController();
const perguntasController = new PerguntasController();
const respostasController = new RespostasController();
const quizController = new QuizController();

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

routers.get('/perguntas',perguntasController.index)
routers.post('./perguntas',perguntasController.create)
routers.get('/perguntas/:id', perguntasController.update)
routers.delete('/quiz/:id', perguntasController.delete)

routers.get('/respostas',respostasController.index)
routers.post('./respostas',respostasController.create)
routers.get('/respostas/:id', respostasController.update)
routers.delete('/respostas/:id', respostasController.delete)

module.exports = routers;                          