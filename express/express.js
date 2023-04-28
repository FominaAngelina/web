const express = require('express');
const router = express.Router();
const browser = require('browser-detect');

let comments = ['very well', 'sad cat'];
let table = [["Users", "0"]];

function HTMLTable(array) {
    let html = '<table border="1">';
    for (let i = 0; i < array.length; i++) {
        html += `<tr><td>${array[i][0]}</td><td>${array[i][1]}</td></tr>`;
    }
    html += '</table>';
    return html
}

router.get('/', function(req, res) {
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

router.post('/comments', function(req, res) {
    let comment = "";
    res.statusCode = 200;
    req.on('data', (chunk) => comment += chunk);
    req.on('end', () => {
        comments.push(comment);
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(comments));
    });
});

router.get('/comments', (req, res) => {
    res.send(JSON.stringify(comments));
});

module.exports = router;