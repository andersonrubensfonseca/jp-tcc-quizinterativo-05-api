const {PrismaClient} = require('@prisma/client')

class QuizController{
    //rota para listar meus quizs//
async index(req,res) {
    const prisma = new PrismaClient()
    const quiz = await prisma.quiz.findMany({});
    res.json(quiz)
}
    async create(req,res){
        const prisma = new PrismaClient()
        const quiz = await prisma.quiz.create(req.body)
        res.status(201).json({message:'Quiz criado com sucesso.'})
    }
    async update(req,res){
        const prisma = new PrismaClient()
        const updateQuiz = await prisma.quiz.updateMany({
            where: {
                id: 'viola@prisma.io',
              }, 
                name: 'Viola the Magnificent',
              },
      )
      res.status(201).json({message:'Quiz atualizado com sucesso.'})
}
    async delete(req,res){
        const prisma = new PrismaClient()
        const deleteQuiz = await prisma.quiz.deleteMany({
            where: {
            id: {
            contains: 'prisma.io',
      },
    },
  })
}
}
module.exports = QuizController;
