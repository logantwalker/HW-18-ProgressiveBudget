let mongoose = require("mongoose");
let Transaction = require("../models/transaction");

mongoose.connect("mongodb+srv://lwalker37:amv12v@cluster0.p7jgf.mongodb.net/Cluster0?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let budgetSeed = [
  {
    name: 'Paycheck',
    value: 2000,
    date: new Date().setDate(new Date().getDate()-10)
  },
  {
    name: 'Groceries',
    value: -200,
    date: new Date().setDate(new Date().getDate()-9)
  },
  {
    name: 'Coffee',
    value: -5,
    date: new Date().setDate(new Date().getDate()-8)
  },
  {
    name: 'Side Gig',
    value: 200,
    date: new Date().setDate(new Date().getDate()-7)
  },
  {
    name: 'Movie',
    value: -20,
    date: new Date().setDate(new Date().getDate()-6)
  },
  {
    name: 'Car Payment',
    value: -300,
    date: new Date().setDate(new Date().getDate()-5)
  },
  {
    name: 'Rent',
    value: -900,
    date: new Date(new Date().setDate(new Date().getDate() - 4))
  },
  {
    name: 'Paycheck',
    value: 2000,
    date: new Date(new Date().setDate(new Date().getDate() - 3))
  },
  {
    name: 'Insurance Payment',
    value: -150,
    date: new Date(new Date().setDate(new Date().getDate() - 2))
  }
];

Transaction.deleteMany({})
  .then(() => Transaction.collection.insertMany(budgetSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });