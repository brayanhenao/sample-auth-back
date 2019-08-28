import express from 'express';

const token = 'AQIC5wM2LY4Sfcwlp2n6tEa-RQ6ECQWm0YAsGfX7GbWLoUY.*AAJTSQACMDIAAlNLABQtNDU0NTQ0NDAxMTY4OTY5OTMzMgACUzEAAjAx*';
const url = 'air-quality/current';
const method = 'GET';

const app = express();

app.get('/auth', (req, res) => {
    var headers = req.headers;
    console.log(headers);

    if (headers.bearer_token === token
        && headers.url === url
        && headers.method === method) {
        res.status(200).send({
        })
    } else {
        res.status(401).send({
        })
    }

});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});