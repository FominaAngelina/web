const express = require('express');
const router = express.Router();
const { postComment: post} = require('./Controller/controller');
const { getCommentId: getComment} = require('./Controller/controller');
const { getComments: Comments} = require('./Controller/controller');

router.use(express.json());

router.get('/', function(req, res){
    res.status(200).send('Hello world!');
});

router.get('/comments/:id', getComment);
router.post('/comments',post);
router.get('/comments', Comments);

module.exports = {
    router
}