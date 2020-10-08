const express = require('express');

const path = require('path');

const apiControl = require('../controller/api-control');

const router = express.Router();

router.get("/api/transaction", apiControl.fetchAll);

module.exports = router;
