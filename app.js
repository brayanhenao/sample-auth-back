var express = require('express');

const token = '12345';
const tokenForbidden = "54321"

const app = express();

app.get('/auth', (req, res) => {
    var headers = req.headers;

    if (req.query.bearer_token === token) {
        res.status(200).send({
            status: 200,
            message: 'Authorized'
        })
    } else if (req.query.bearer_token === tokenForbidden){
        res.status(403).send({
            status: 403,
            message: 'Forbidden'
        })
    } else {
        res.status(401).send({
            status: 401,
            message: 'Unauthorized'
        })
    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});
