const express = require('express');
const router = express.Router();
const { listPeople } = require('../controllers/peopleController');

router.get('/', listPeople)

module.exports = router
