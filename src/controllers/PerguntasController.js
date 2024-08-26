const {PrismaClient} = require('@prisma/client')

class PerguntasController{
    //rota para listar minhas perguntas//
async index(req,res) {
    const prisma = new PrismaClient()
    const perguntas = await prisma.perguntas.findAll();
    res.js(perguntas)
}
    async create(req,res){
        const prisma = new PrismaClient()
        const perguntas = await prisma.perguntas.create(req.body)
        res.status(201).json({message:'Pergunta criada com sucesso.'})
    }
    async update(req,res){
        const prisma = new PrismaClient()
        const updatePerguntas = await prisma.perguntas.updateMany({
            where: {
                id: 'viola@prisma.io',
              }, 
                Respostas: 'Viola the Magnificent',
              },
      )
      res.status(201).json({message:'Pergunta atualizada com sucesso.'})
}
    async delete(req,res){
        const prisma = new PrismaClient()
        const deletePerguntas = await prisma.perguntas.deleteMany({
            where: {
            id: {
            contains: 'prisma.io',
      },
    },
  })
}
}
module.exports = PerguntasController;