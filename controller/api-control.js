const path = require('path');
const Transaction = require('../models/transaction');

exports.fetchAll = (req, res, next) => {
    Transaction.find({}).sort({date: -1})
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(404).json(err);
    });
}