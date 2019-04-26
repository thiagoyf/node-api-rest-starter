const { User } = require('../models')

class UserController {
  create (req, res) {
    return res.render('auth/signup')
  }

  async store (req, res) {
    // pega o filename de req.file e renomeia e cria uma const chamada avatar
    const { filename: avatar } = req.file

    console.log(req.body)

    // é passado um objeto para o User.create
    // com todo o resto da informação de req.body
    // e adiciona um campo chamado avatar com valor armazenado no const avatar
    await User.create({ ...req.body, avatar })

    return res.redirect('/')
  }
}

module.exports = new UserController()
