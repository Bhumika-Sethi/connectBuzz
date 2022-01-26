const express = require('express');
const port = 80;

const app = express();

app.listen(port, function(err){
    if(err){
        console.log("There is an error in finding the port or we can say running the server", err);
        return;
    }
    console.log('Server is up and running at port', port);
});