"use strict";

var cheerio = require("cheerio");
var sprintf = require("util").format;
var utils = require("./utils.js");

function filter(data, config) {
  function filte(html_content) {
    var $ = cheerio.load(html_content, {
      ignoreWhitespace: false,
      xmlMode: false,
      lowerCaseTags: false
    });
    $("p").each(function() {
      $(this).html(replace_emoji($(this).html(), config));
    });
    return $.html();
  }
  data.excerpt = filte(data.excerpt);
  data.more = filte(data.more);
  data.content = filte(data.content);
  return data;
}

function emoji_html_tag(emoji_key, config) {
  var emoji_char = utils.emoji_key_to_unichar(emoji_key, config.full);
  var img_url = "/" + config.image_dir + "/" + emoji_key + ".png";
  var format =
    '\n<img width="20" height="20" class="emoji nofancybox" title="%s" alt="%s" src="%s" style="%s">\n';
  var str_element = sprintf(
    format,
    ":" + emoji_key + ":",
    utils.char_to_entities(emoji_char),
    img_url,
    config.style ? style_obj_to_css(config.style) : ""
  );
  return str_element;
}

function style_obj_to_css(style_obj) {
  return Object.keys(style_obj).reduce(function(css, key) {
    try {
      css += key + ":" + style_obj[key] + ";\n";
    } catch (err) {
      console.error(
        "An error occured when converting to css { " +
          key +
          ": " +
          style_obj[key] +
          " }"
      );
    }
    return css;
  }, '');
}
function replace_emoji(str, config) {
  return str.replace(/:([a-zA-Z_]+):/g, function(full_key, emoji_key) {
    if (utils.is_emoji_key(emoji_key, config.full)) {
      return emoji_html_tag(emoji_key, config);
    } else {
      return full_key;
    }
  });
}

module.exports = filter;
