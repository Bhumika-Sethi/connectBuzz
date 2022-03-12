const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/sign-in', {useNewUrlParser: true});


const db = mongoose.connection;
db.once('open',() =>{
    console.log('successfully connected to the database');
});
db.on('error',(error) => {
    console.log("Your error", error);
});
