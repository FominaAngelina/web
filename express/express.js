const express = require('express');
const router = express.Router();
const browser = require('browser-detect');
const helmet = require('helmet');
const morgan = require('morgan');

let users = [{ user : "Fomina", value : "Вы авторизованы как Фомина Ангелина"}, {user : "Fomin", value : "Вы авторизованы как Фомин Матвей"}];

let comments = ['very well', 'sad cat'];
let table = [["Users", "0"]];

router.use(express.json());
router.use(morgan('tiny'));
router.use(helmet());

let answer = '';

function HTMLTable(array) {
    let html = '<table border="1">';
    for (let i = 0; i < array.length; i++) {
        html += `<tr><td>${array[i][0]}</td><td>${array[i][1]}</td></tr>`;
    }
    html += '</table>';
    return html
}

function check(req, res, next){
    var useryes = 0;
    if (req.query.key)
    {
        for(var i = 0; i < users.length; i++){
            if (users[i].user == req.query.key)
            {
                useryes++;
                console.log("yes");
                answer = users[i].value;
                next();
            }
        }
        if (useryes == 0) res.status(400).send('Такого пользователя не существует!');
    }
    else
    {
        res.status(400).send('Вы не авторизованы!');
    } 
}

function common(req, res, next){
    if(req.body.comment)
    {
        next();
    }
    else res.status(400).send('Вы неправльно ввели запрос!');
}

router.get('/', function(req, res) {
    res.statusCode = 200;
    res.send('Home');
});

router.get('/users', function(req, res) {
    let ua = browser(req.headers['user-agent']);
            isStated = false;
            for (let i = 0; i < table.length; i++) {
                if (table[i][0] === ua.name + ' ' + ua.version) {
                    isStated = true;
                }
            }
            if (isStated){
                table[table.length - 1][1]++;
            }
            else table.push([ua.name+' '+ua.version, 1]);
            res.setHeader('Content-Type', 'text/html');
            res.end(HTMLTable(table));
            
});

router.post('/comments', check, common, function(req, res) {
    res.statusCode = 200;
    comments.push(req.body.comment);
    res.send(`${answer + '\n' + comments}`);
});

router.get('/comments', (req, res) => {
    res.send(JSON.stringify(comments));
});

router.get('/register', check, function(req, res){
    res.statusCode = 200;
    res.send(`${answer}`);
});

module.exports = {
    router,
    comments
}