const express = require('express');

const app = express();
const router = express.Router();

router.use('/product', (req, res, next) => {
    res.json({name: "Sarjono", email: "sjn060370@gmail.com"});
    next();
})

router.use('/price', (req, res, next) => {
    res.json({price : 300000});
    next();
})
app.use('/', router);

// GET 'user/' ===>[{name: sarjono}]

app.listen(4500);