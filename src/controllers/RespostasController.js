class RespostasController{
    //rota para listar minhas respostas//
async index(req,res) {
    const respostas = await prisma.respostas.findAll();
    res.js(respostas)
}
    async create(req,res){
        const respostas = await prisma.respostas.create(req.body)
        res.status(201).json({message:'Resposta criada com sucesso.'})
    }
    async update(req,res){
        const updateRespostas = await prisma.respostas.updateMany({
            where: {
                id: 'viola@prisma.io',
              }, 
                Perguntas: 'Viola the Magnificent',
              },
      )
      res.status(201).json({message:'Resposta atualizada com sucesso.'})
}
    async delete(req,res){
        const deleteRespostas = await prisma.respostas.deleteMany({
            where: {
            id: {
            contains: 'prisma.io',
      },
    },
  })
}
}
module.exports = RespostasController;
