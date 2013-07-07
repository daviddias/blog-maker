# blog-maker -- generate blog from .md files, highly inspired by blog.nodejs.org

## Description

This blog generator is highly inspired by blog.nodejs.org (meaning, I've extracted the code which make it works from https://github.com/joyent/node to make it work as a stand alone module =) )

Big props to @dshaw for giving me this idea and @isaacs for explaining me how the magic was done =)

## Install

<pre>
  npm install blog-maker
</pre>

## How to use

To generate a simple blog, you will need:
* A folder where you insert the blog posts as .md files
* An rss.xml template to generate the blog feed
* An .html file to use as template for each blog post

You can find examples of this in the 'data' folder of this repo

To use it, just require the module
```javascript
var blogMaker = require('blog-maker');
```
And then call the function returned with the following args:
* <whereThePostsAre> - for example data/posts
* <folderWhereToPutGenFiles> - output folder
* <blogPageTemplate> - for example data/blog.html
* <rss template> - for example data/rss.xml
* [blogPath] - if you want your blog to be hosted in yourdomain.com/blog, pass 'blog' in this arg 
* [numberOfPostPerPage] - number of posts presented per page

example:

```javascript
blogMaker('data/posts', 'public', 'data/blog.html', 'data/rss.xml')
```

You can find and example using `node-static` to server the blog posts in the 'example' folder



## A blog contributors guide template

### Structure

data/posts - Folder containing all the posts

data/blog.html - blog page template (for each post)

data/rss.xml - rss feed template

### Adding a new post

1. Open data/posts folder
2. Create a new <title of post>.md file
3. Add title, author, date, slug and category, e.g:

  * title: Best post in the world
  * author: Alice
  * date: Fri Jan 12 00:45:13 UTC 2012
  * slug: megapost
  * category: postland

4. Write your post (use html you want)
`<blockquote></blockquote>`
`<code></code>`
You name it :)

5. Then you just have to run blog-maker

Note: folder hierarchy in data/posts is meaningless, you can use it for your own organization, for example, one folder for each author or for each category



## License

(The MIT License)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
