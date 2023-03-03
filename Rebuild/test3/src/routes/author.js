const express = require('express');
const router = express.Router();
const c = require('../controller');

router.get('/', c.author.index);
router.post('/', c.author.create)
router.put('/:id', c.author.update)
router.delete('/:id', c.author.delete)

module.exports = router;