const express = require('express');

const app = express();

app.use(() =>{
    console.log('halooo server1')
    console.log('halooo server2')
})

app.listen(4000);