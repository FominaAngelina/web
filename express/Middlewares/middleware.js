function comment(req, res, next){
    if (req.body.comment == "" || !req.body.comment)
    {
        res.send('Данные введены некорректно!');
    }
    else next();
}

function author(req, res, next){
    if (req.body.author == "" || !req.body.author)
    {
        res.send('Данные введены некорректно!');
    }
    else next();
}

module.exports = {
    comment,
    author
}