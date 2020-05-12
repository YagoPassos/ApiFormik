const mongoose = require('mongoose');
const Users = mongoose.model('Users');

// list
exports.listUsers = async (req, res) => {
  try {
    const data = await Users.find({});
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({ message: 'Falha ao carregar usuário.' });
  }
};

// create
exports.createUsers = async (req, res) => {
  try {
    const user = new Users({
      name: req.body.name,
      username: req.body.username,
      password: req.body.password,
      email: req.body.email
    });

    console.log(user)

    await user.save();

    res.status(201).send({ message: 'Usuário cadastrado com sucesso!' });
  } catch (e) {
    res.status(500).send({ message: 'Falha ao cadastrar o Usuário.' });
  }
};

exports.updateUsers = async (req, res) => {
  try {
    const { errors } = validationResult(req);

    if (errors.length > 0) {
      return res.status(400).send({ message: errors })
    }

    await repository.updateUserFormik(req.params.id, req.body);
    res.status(200).send({
      message: 'Usuário atualizado com sucesso!'
    });
  } catch (e) {
    res.status(500).send({ message: 'Falha ao atualizar a usuário.' });
  }
};

exports.deleteUsers = async (req, res) => {
  try {
    await repository.deleteUserFormik(req.params.id);
    res.status(200).send({
      message: 'Usuário removido com sucesso!'
    });
  } catch (e) {
    res.status(500).send({ message: 'Falha ao remover o usuário.' });
  }
};

