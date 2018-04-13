This pulgin is for hexo, give your articles emoji support.

[简体中文](https://github.com/frapples/hexo-article-emoji/blob/master/readme_cn.md)

What is hexo-article-emoji ?
----------------------------

This is for the hexo static blog system to write a plugin, the function is to add emoji expression to your article support.

This plugin is through the analysis of the final HTML generated by the hexo renderer, from the &lt;p&gt; tag to replace the emoji syntax corresponding to the realization of the picture. So it does not only support markdown, in fact I use org-mode to write blog it is also supported.

How to install?
---------------

First, run in your blog directory:

``` bash
npm install https://github.com/frapples/hexo-article-emoji --save
```

After that, you need to copy the emoji picture resources to your source folder. It is `source/images/emoji` folder. Run in the blog directory:

``` bash
hexo article-emoji install
```

In fact emoji pictures have two versions, light and full version. The default will only copy the light version, if you want to copy the full version:

``` bash
hexo article-emoji install full
```

Remove the picture installed by above command, in fact, is to delete the `source/images/emoji` folder:

``` bash
hexo article-emoji remove
```

How to configure?
-----------------

You need to edit hexo configuration file `_config.yml`, find the option to change to `true`:

``` yml
post_asset_folder: true
```

If you need to use the full version of emoji expression, you need to join in `_config.yml`

``` yml
article_emoji:
  full: true
```

If you need to customize emoji `<img>` element, you need to add in `_config.yml`

``` yml
article_emoji:
  style:
    display: inline
    padding: 10px
```

How to use?
-----------

This link contains a table, lists the emoji syntax and expression of the relationship: <http://www.webpagefx.com/tools/emoji-cheat-sheet/>

For example, you write:

``` example
I fell good! :simple_smile:
```

`:simple_smile:` will be parsed into the corresponding emoji expression image, which is displayed.

Now, try to add emoji expression to your blog, then:

``` bash
hexo g
```

Enjoy it!

thanks
------

This plugin refers to the following two plug-in resources:

-   <https://github.com/sergiolepore/hexo-tag-emojis>
-   <https://github.com/markdown-it/markdown-it-emoji>

Thanks to them.
