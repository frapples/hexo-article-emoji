module.exports = function (hexo) {
    var M = {};
    M.image_dir = function() {
        var install_dir;
        if (!("article_emoji" in hexo.config) || !("image_dir" in hexo.config.emoji)) {
            install_dir = 'images/emoji';
        } else {
            install_dir = hexo.config.article_emoji.image_dir;
        }
        return install_dir;
    };

    M.install_dir = function()
    {
        return hexo.base_dir + 'source/' + M.image_dir();
    };

    M.is_using_full = function()
    {
        if (!("article_emoji" in hexo.config) || !("full" in hexo.config.emoji)) {
            return false;
        } else {
            return hexo.config.article_emoji.full;
        }
    };
    return M;
}
