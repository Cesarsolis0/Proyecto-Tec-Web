//base de datos
const mongoose = require('mongoose');

const user ='alanbastiangutierrez';
const password ='ncLnAuGkjdel1e5K';
const uri = `mongodb+srv://${user}:${password}@cluster0.l9puauh.mongodb.net/`;

mongoose.connect(uri, 
    { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('base de datos conectada'))
    .catch(e => console.log(e))