module.exports = function(hexo) {

    var emoji_config = require("./config.js")(hexo);
    var fs = require('fs-extra');

    hexo.extend.console.register(
        'article-emoji',
        'hexo-article-emoji plugins command',
        function(args) {
            var cmd = args._[0];
            if (cmd == "install") {
                emoji_install_image(args._[1]);
            } else if (cmd == "remove") {
                emoji_remove_image();
            } else {
                hexo.call('help', {_: ['emoji']});
            }
        }
    );



    function emoji_install_image(version)
    {
        var light_dir = __dirname + '/images/emoji-light';
        var full_extra_dir = __dirname + '/images/emoji-full-extra';
        var to_dir = emoji_config.install_dir();


        try {
            fs.copySync(light_dir, to_dir);
            if (version == "full") {
                fs.copySync(full_extra_dir, to_dir);
            }
            console.log('>> Done!\n');
        } catch (err) {
            console.error(err)
        }
    }

    function emoji_remove_image()
    {
        var dir = emoji_config.install_dir();
        try {
            fs.removeSync(dir); 
            console.log('>> Done!\n');
        } catch (err) {
            console.error(err);
            console.warn('!! There was an error removing '+ dir +' directory. Please, remove it manually.');
        }
    }
};
