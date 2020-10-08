const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;

const app = express();

const htmlRoutes = require('./routes/html-routes');
const apiRoutes = require('./routes/api-routes')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// app.use(htmlRoutes);
// app.use(apiRoutes);

// mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://lwalker37:amv12v@cluster0.p7jgf.mongodb.net/Cluster0?retryWrites=true&w=majority',
// {   useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false
// })
//     .then(result =>{
//         app.listen(PORT)
//         console.log('http://localhost:' + PORT);
//     })
//     .catch(err => {
//         console.log(err);
//     });