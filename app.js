var express = require('express');

const token = '12345';

const app = express();

app.get('/auth', (req, res) => {
    var headers = req.headers;

    if (req.query.bearer_token === token) {
        res.status(200).send({
            code: 200,
            message: 'Authorized'
        })
    } else {
        res.status(401).send({
            code: 401,
            message: 'Unauthorized'
        })
    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});
