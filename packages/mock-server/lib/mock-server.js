const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post('/page', (req, res) => {
    const { body = {} } = req;
    if (Object.keys(body).length) {
        res.json(req.body);
    }
});

app.listen(4000, () => {
    console.log('http://127.0.0.1:4000');
});
