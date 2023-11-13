const { Router } = require('express');

const { verify } = require('../middlewares/auth');
const { getUser, createUser } = require('../controllers/user');
const { createUserValidation } = require('../validations/user');

const router = Router();

router.get('/:id', verify, getUser);
router.post('/', createUserValidation(), createUser);

module.exports = router;