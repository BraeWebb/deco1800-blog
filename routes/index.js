var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/deco1800-blog');

var postSchema = require("../data/posts.js");
var Post = mongoose.model("posts", postSchema);

var format = require("../modules/formatter");

/* GET home page. */
router.get('/', function(req, res, next) {
    Post.find({"author": "BRAE"}).sort({date: -1}).exec(function(err, posts){
        res.render('index', { title: 'DECO1800 Blog', posts: posts, format: format});
    });

});

router.get('/tag/:tag', function(req, res, next){
    Post.find({tags: {$in: [req.params.tag]}}).sort({date: -1}).exec(function(err, posts){
        res.render('index', { title: 'DECO1800 Blog - ' + req.params.tag, posts: posts, format: format});
    });
});

module.exports = router;
