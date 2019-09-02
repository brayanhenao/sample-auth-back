var express = require('express');

const token = 'AQIC5wM2LY4Sfcwlp2n6tEa-RQ6ECQWm0YAsGfX7GbWLoUY.*AAJTSQACMDIAAlNLABQtNDU0NTQ0NDAxMTY4OTY5OTMzMgACUzEAAjAx*';

const app = express();

app.get('/auth', (req, res) => {
    var headers = req.headers;

    if (headers.bearer_token === token) {
        res.status(200).send({
        })
    } else {
        res.status(401).send({
        })
    }
});

app.get('/current', (req, res) => {
    res.status(200).send(true);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});
