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
}


module.exports = UsersController;