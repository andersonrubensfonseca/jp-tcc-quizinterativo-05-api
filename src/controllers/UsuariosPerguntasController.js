class PerguntasController{
    //rota para listar as perguntas do meu quiz//
async index(req,res) {
    const perguntas = await prisma.perguntas.findAll();
    res.json(perguntas)
}
    async create(req,res){git 
        const perguntas = await prisma.perguntas.create(req.body)
        res.status(201).json({message:'Perguntas criadas com sucesso.'})
    }
    async update(req,res){
        const updatePerguntas = await prisma.perguntas.updateMany({
            where: {
                id: 'viola@prisma.io',
              }, 
                name: 'Viola the Magnificent',
              },
      )
      res.status(201).json({message:'Quiz atualizado com sucesso.'})
}
    async delete(req,res){
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
