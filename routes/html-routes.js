const path = require('path');

const express = require('express');

const htmlControl = require('../controller/html-control');

const router = express.Router();

router.get('/', htmlControl.getIndex);

module.exports = router