const {postComments : servicePost} = require('../Services/services.js');
const {comment: checkComment} = require('../Middlewares/middleware.js');
const {author: checkAuthor} = require('../Middlewares/middleware.js');
const {getCommentId : serviceGetComment} = require('../Services/services.js');
const {getComments : serviceGetComments} = require('../Services/services.js');

let result = '';

async function postComment(req,res){
    checkAuthor;
    checkComment;
        let comment = req.body.comment;
        let author = req.body.author;
        result = await servicePost(comment, author); // любая проверка с ожиданием ответа
        res.send('Комментарий добавлен!');
}

async function getCommentId(req, res){
    //checkId;
    let id = req.params['id'];
    result = await serviceGetComment(id); // любая проверка с ожиданием ответа
    res.send(result);
}

async function getComments(req, res){
    result = await serviceGetComments(); // любая проверка с ожиданием ответа
    res.send(result);
}

module.exports = {
    postComment,
    getCommentId,
    getComments
}