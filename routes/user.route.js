const express = require('express');
const controller = require('../controllers/use.controller');
const validate = require('../validate/use.validate')

const router = express.Router();

router.get('/', controller.index);

router.get('/search', controller.search);

router.get('/create', controller.create);

router.get('/:id', controller.view);

router.post('/create', validate.postCreate, controller.postCreate);

module.exports = router;