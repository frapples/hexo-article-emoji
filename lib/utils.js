var full_table =  require("./data/full.json");
var light_table = require("./data/light.json");

exports.is_emoji_key =  function(key, is_full)
{
    var table = is_full ? full_table : light_table;
    return key in table;
}

exports.emoji_key_to_unichar = function(key, is_full)
{
    var table = is_full ? full_table : light_table;
    if (key in table) {
        return table[key];
    } else {
        return "";
    }
}

exports.char_to_entities = function(char)
{
    // www.ruanyifeng.com/blog/2014/12/unicode.html
    return "&#" + char.codePointAt().toString() + ";";
}
