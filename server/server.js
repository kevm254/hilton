const express = require('express');
const app = express();


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/address', (req, res) => {
    res.json({ data: 'hi' });
});

app.set('port', 4200);
const port = app.get('port');

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});