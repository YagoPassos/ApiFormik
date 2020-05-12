const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/users-controller');
const { check } = require('express-validator');

router.get('/', usersControllers.listUsers);
router.post('/', [
    check('name').isLength({ min: 3 }).withMessage("O nome precisa ter no mínimo 3 caracteres."),
    check('username').isLength({ min: 5, max: 100 }).withMessage("O nickname precisa ter no mínimo 5 caracteres e no máximo 100.")
], usersControllers.createUsers);

module.exports = router;