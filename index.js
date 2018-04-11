'use strict';
var assign = require('object-assign');

var config = assign({
    'image_dir': 'images/emoji',
    full: false
}, hexo.config.article_emoji);
config.install_dir = hexo.base_dir + 'source/' + config.image_dir;
config.root_url = hexo.config.root;

var filter =require("./lib/after-filter.js");
hexo.extend.filter.register(
    'after_post_render',
    function(data){
        return filter(data, config);
    });

var command = require("./lib/command.js");
hexo.extend.console.register(
    'article-emoji',
    'hexo-article-emoji plugins command',
    function (args) {
        command(args, hexo, config);
    }
);


