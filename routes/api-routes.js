const express = require('express');

const Transaction = require('../models/transaction');

const apiControl = require('../controller/api-control');

const router = express.Router();

router.get("/api/transaction", apiControl.fetchAll);

router.post("/api/transaction", ({ body }, res) => {
    Transaction.create(body)
        .then(dbTransaction => {
            res.json(dbTransaction);
        })
        .catch(err => {
            res.status(404).json(err);
        });
});


module.exports = router;
