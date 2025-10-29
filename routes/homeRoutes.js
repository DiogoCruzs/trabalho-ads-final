const express = require('express');
const router = express.Router();

const testeController = require('../controllers/testeController'); 
const sobreController = require('../controllers/sobreController'); 

router.get('/', testeController.read);
router.get('/sobre', sobreController.index);

router.post('/criar-item', testeController.create);

module.exports = router;