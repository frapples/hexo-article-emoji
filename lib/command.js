'use strict';

var fs = require('fs-extra');

function command(args, config) 
{
    var cmd = args._[0];
    if (cmd == "install") {
        emoji_install_image(config, args._[1]);
    } else if (cmd == "remove") {
        emoji_remove_image(config);
    } else {
        hexo.call('help', {_: ['emoji']});
    }
}

function emoji_install_image(config, version)
{
    var light_dir = __dirname + '/../images/emoji-light';
    var full_extra_dir = __dirname + '/../images/emoji-full-extra';

    try {
        if (version == "full") {
            console.log('Copying full version emoji images...');
        } else {
            console.log('Copying light version emoji images...');
        }

        fs.copySync(light_dir, config.install_dir);
        if (version == "full") {
            fs.copySync(full_extra_dir, config.install_dir);
        }

        console.log('>> Done!\n');
    } catch (err) {
        console.error(err);
    }
}

function emoji_remove_image(config)
{
    var dir = config.install_dir;
    try {
        fs.removeSync(dir); 
        console.log('Removing emoji images...');
        console.log('>> Done!\n');
    } catch (err) {
        console.error(err);
        console.warn('!! There was an error removing '+ dir +' directory. Please, remove it manually.');
    }
}


module.exports = command;
