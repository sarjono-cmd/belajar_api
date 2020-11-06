const express = require('express');

const app = express();
const router = express.Router();

router.use('/product', (req, res, next) => {
    console.log('request :', req);
})

// router.use('/product', (req, res, next)=>{
//     console.log('request :',req);
// })


app.use('/', router);

// GET 'user/' ===>[{name: sarjono}]

app.listen(4500);