const express = require('express');
const { getData, postData, putData, deleteData } = require('../controllers/data.controllers');
const router = express.Router();

router.get('/',getData);

router.post('/',postData);

router.put('/',putData);

router.delete('/',deleteData);

module.exports = router;