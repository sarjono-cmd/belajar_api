const express = require('express');

const app = express();

app.use(() =>{
    console.log('halooo server1')
    console.log('halooo server2')
    console.log('haloo server3')
})

app.listen(4000);