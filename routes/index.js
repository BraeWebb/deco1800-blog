var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/deco1800-blog');

var postSchema = require("../data/posts.js");
var Post = mongoose.model("posts", postSchema);

/* GET home page. */
router.get('/', function(req, res, next) {
    Post.find({"author": "BRAE"}).exec(function(err, posts){
        res.render('index', { title: 'DECO1800 Blog', posts: posts});
    });

});

module.exports = router;
