const {PrismaClient} = require('@prisma/client')

class UsersController{
    //rota para listar meus usuários//
async index(req,res) {
    const prisma = new PrismaClient()
    const usuarios = await prisma.usuarios.findMany();
    res.json(usuarios)
}
    async create(req,res){
      const prisma = new PrismaClient()
      const {Nome, Email, Senha} = req.body;
      const data = {
        Nome,
        Email,
        Senha
      }
      const usuario = await prisma.usuarios.create({data})
        res.status(201).json({message:'Usuário criado com sucesso.'})
    }
    async update(req,res){
      const prisma = new PrismaClient()
        const updateUsers = await prisma.usuarios.updateMany({
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
      const prisma = new PrismaClient()
        const deleteUsers = await prisma.usuarios.deleteMany({
            where: {
            email: {
            contains: 'prisma.io',
      },
    },
  })
}
}
module.exports = UsersController;