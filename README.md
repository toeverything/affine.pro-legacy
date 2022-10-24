# affine.pro

This repo is AFFiNE official website and blog source code.

## How to publish blog

First, create a folder in `content/${year}/${month}`, the folder name will use in published website url.

Secondly, create `index.md` in the folder you created in previous step. Here is a example file:

```
---
title: How AFFiNE Classifies Editors
author: Chi Zhang, Yifeng Wang , Ran Chen, Fanjing Zhang
tags: Let’s make XXX
cover: ./cover.jpg
description: There are so many editors today that users may find it difficult to select
created: 2022-06-27
updated: 2022-06-27
layout: blog
---

Here is the real blog content.

The content you write needs to conform to [the github markdown specification(GFM)](https://github.github.com/gfm/).

```

You can add relative images/videos in the same folder. Then you can use it in `index.md` like `./${your file name}`.

Once you finish the blog, you can use github action -- Build Test Version building the blog for reviewing.

Finally, after assurance to publish, you can create a pull request to branch main. After your branch merged to main, it will automatically publish to the world (after about 3-5 minutes).

## How to develop

### Prerequisites

- Git
- Node: any 12.x version starting with v12.0.0 or greater
- Pnpm: See [how to installation](https://pnpm.io/installation)

### develop

```
# install dependencies
pnpm install

# run
pnpm start
```

### build

Following command will generate static files in `out/`.

```
pnpm build
```

Then you can open http://localhost:3000 in browser.

## Knowledge you should know

[Github Flavor Markdown(GFM)](https://github.github.com/gfm/)

[Git](https://git-scm.com/book/en/v2)
