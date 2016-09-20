'use strict';
var cheerio = require('cheerio');
var util = require("util");
var emoji_config = require("./config.js")(hexo);

require("./command.js")(hexo);

hexo.extend.filter.register('after_post_render', function(data){
    function filte(html_content) {
        var $ = cheerio.load(html_content, {
            ignoreWhitespace: false,
            xmlMode: false,
            lowerCaseTags: false
        });
        $('p').each(function () {
          $(this).html(replace_emoji($(this).html()));
        });
        return $.html();
    }
    data.excerpt = filte(data.excerpt);
    data.more = filte(data.more);
    data.content = filte(data.content);
    return data;
});

// -------------------------------------------------
var emoji_convert_table = require(emoji_config.is_using_full() ? "./full.json" : "./light.json");

function is_emoji_key(key)
{
    return key in emoji_convert_table;
}

function emoji_key_to_char(key)
{
    if (key in emoji_convert_table) {
        return emoji_convert_table[key];
    } else {
        return "";
    }
}
// -------------------------------------------------


function emoji_html_tag(emoji_key)
{
    var emoji_char = emoji_key_to_char(emoji_key);
    var img_url = "/" + emoji_config.image_dir() + "/" + emoji_key + ".png";
    var format = '\n<img width="20" height="20" class="emoji nofancybox" title="%s" alt="%s" src="%s">\n';
    return util.format(format,
                       ":" + emoji_key + ":",
                       char_to_html_entities(emoji_char),
                       img_url);
}

function replace_emoji(str) {
    if (str.search(":") < 0) {
        return str;
    }
    return str.replace(/:([a-zA-Z_]+):/g, function (full_key, emoji_key) {
        if (is_emoji_key(emoji_key)) {
            return emoji_html_tag(emoji_key);
        } else {
            return full_key;
        }
    });
}

function char_to_html_entities(char)
{
    // www.ruanyifeng.com/blog/2014/12/unicode.html
    return "&#" + char.codePointAt().toString() + ";";
}

