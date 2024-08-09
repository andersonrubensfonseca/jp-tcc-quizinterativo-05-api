class UsersController{
    //rota para listar meus usuários//
async index(req,res) {
    const usuario = await prisma.users.findAll();
    res.json(usuarios)
}
    async create(req,res){
        const usuario = await prisma.users.create(req.body)
        res.status(201).json({message:'Usuário criado com sucesso.'})
    }
    async update(req,res){
        const updateUsers = await prisma.user.updateMany({
        where: {
          email: 'viola@prisma.io',
        },
        data: {
          name: 'Viola the Magnificent',
        },
      })
      res.status(201).json({message:'Usuário atualizado com sucesso.'})
}
    async delete(req,res){
        const deleteUsers = await prisma.user.deleteMany({
            where: {
            email: {
            contains: 'prisma.io',
      },
    },
  })
}
}
module.exports = UsersController;