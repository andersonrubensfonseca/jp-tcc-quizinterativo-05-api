const {PrismaClient} = require('@prisma/client')

class AuthController{
    async login(req, res){
        const prisma = new PrismaClient()
        const {Email, Senha} = req.body;
        const user = await prisma.usuarios.findUnique({
            where: {
              Email,
            },
          })
        if(!user){
            return res.status(400).json({message: 'Credenciais inválidas'})
        }
        if(!user.Ativo){
            return res.status(400).json({message: 'Credenciais inválidas'})
        }
        if(user.Senha !== Senha){
            return res.status(400).json({message: 'Credenciais inválidas'})
        }

        const usuario = {
            Nome: user.Nome,
            Email: user.Email
        }

        return res.status(200).json(usuario)
    }
}


module.exports = AuthController;