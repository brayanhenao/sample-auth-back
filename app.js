var express = require('express');

const token = '12345';
const tokenForbidden = "54321"

const app = express();
app.set('json spaces', 2);
app.use(express.json())

var petList = [
    {
        id: 1,
        name: 'Annie',
        age: 3
    },
    {
        id: 2,
        name: 'Hulk',
        age: 5
    },
    {
        id: 3,
        name: 'Luna',
        age: 1
    },
    {
        id: 4,
        name: 'Max',
        age: 7
    },
];

app.get('/auth', (req, res) => {

    if (req.query.bearer_token === token) {
        res.status(200).send({
            status: 200,
            message: 'Authorized'
        })
    } else if (req.query.bearer_token === tokenForbidden) {
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

app.get('/pets', (req, res) => {
    res.header("Content-Type", 'application/json');
    res.status(200).send(JSON.stringify(petList));
});

app.post('/pets', (req, res) => {
    var petName = req.body.name;
    var petAge = req.body.age;

    if (petName === undefined) {
        res.status(400).send({
            code: 400,
            message: "Body parameter 'name' not present"
        });
    }

    if (petAge === undefined) {
        res.status(400).send({
            code: 400,
            message: "Body parameter 'age' not present"
        });
    }

    var petId = petList[petList.length - 1].id + 1

    petList.push({
        id: petId,
        name: petName,
        age: petAge
    })

    res.header("Content-Type", 'application/json');
    res.status(201).send({
        code: 201,
        message: "Pet created!"
    });
});

app.get('/pets/:id', (req, res) => {
    var pet = searchPet(req.params.id)
    res.header("Content-Type", 'application/json');

    if (pet === undefined) {
        res.status(404).send();
    } else {
        res.status(200).send(searchPet(req.params.id));
    }
});

function searchPet(id) {
    return petList[id - 1];
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});
