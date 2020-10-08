const express = require('express');

const apiControl = require('../controller/api-control');

const router = express.Router();

router.get("/api/transaction", apiControl.fetchAll);

router.post("/api/transaction",apiControl.postTransaction);


module.exports = router;
