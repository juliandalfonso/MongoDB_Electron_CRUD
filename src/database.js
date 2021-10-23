const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/electrondb')
    .then(db=>console.log('db connected'))
    .catch(err=>console.log(err));