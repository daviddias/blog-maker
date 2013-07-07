blog-maker
==========

Blog generator from .md post files, highly inspired from blog.nodejs.org

## How to use






## Blog Contributors Guide 

### Structure

data/posts - Folder containing all the posts

data/blog.html - blog page template (for each post)

data/rss.xml - rss feed template

tools/generate.js & tools/wp-to-markdown.js - module to generate the blog posts using the template

### Adding a new post

1. Open data/posts folder
2. Create a new <title of post>.md file
3. Add title, author, date, slug and category, e.g:

  title: Best post in the world
  author: Alice
  date: Fri Jan 12 00:45:13 UTC 2012
  slug: megapost
  category: postland

4. Write your post (use html you want)
`<blockquote></blockquote>`
`<code></code>`
You name it :)

5. Push to master, and it's done =)

Note: folder hierarchy in data/posts is meaningless, you can use it for your own organization, for example, one folder for each author or for each category