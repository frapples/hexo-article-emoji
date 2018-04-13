
中文文档
========

hexo-article-emoji 是什么？
---------------------------

这是为 hexo 静态博客系统写的一个插件，功能是给你的文章添加 emoji 表情支持。

这个插件是通过解析文章最终生成的 HTML，从`<p>`标签中把 emoji 语法替换成对应的图片实现的。 所以它不仅支持 markdown，实际上我使用 org-mode 写博客它也是支持的。

如何安装？
----------

首先，在你的博客目录下运行：

``` bash
npm install https://github.com/frapples/hexo-article-emoji --save
```

如果你和我一样，是大陆用户，不想卡成狗的话，你最好使用阿里的镜像源：

``` bash
npm install https://github.com/frapples/hexo-article-emoji --save --registry=https://registry.npm.taobao.org
```

之后，你需要把 emoji 的图片资源复制到你的 source 文件夹去，默认会复制到你的 source/images/emoji 文件夹。 在博客目录执行：

``` bash
hexo article-emoji install
```

实际上 emoji 图片有两个版本，精简版和完整版。默认只会复制精简版，如果你想复制完整版的话：

``` bash
hexo article-emoji install full
```

移除上面命令安装的图片，其实也就是删除 source/images/emoji 文件夹：

``` bash
hexo article-emoji remove
```

如何配置？
----------

你需要编辑 hexo 的配置文件 `_config.yml` ， 找到一下选项，改为 `true` ：
``` yml
post_asset_folder: true
```

假如你需要使用完整版的 emoji 表情，你需要在 `_config.yml` 加入：
``` yml
article_emoji:
  full: true
```

如果你需要自定义`<img>`标签，你需要在`_config.yml`中加入：
``` yml
article_emoji:
  style:
    display: inline
    padding: 10px
```

如何使用？
----------

这个链接附上了 emoji 的语法和表情的对照表： <http://www.webpagefx.com/tools/emoji-cheat-sheet/> 比如说，你输入：

``` example
I fell good! :simple_smile:
```

`:simple_smile:` 会被解析成对应的 emoji 表情图片，从而显示出来。

现在，试试在你的博客里添加 emoji 表情，然后：

``` bash
hexo g
```

看看吧！

感谢
----

本插件参考了以下两个插件的资源：

-   <https://github.com/sergiolepore/hexo-tag-emojis>
-   <https://github.com/markdown-it/markdown-it-emoji>

特此感谢。
