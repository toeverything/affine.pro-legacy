# affine.pro

This repo is AFFiNE official website and blog source code.

## How to publish blog

The new blog source uses AFFiNE - public workspace: [https://app.affine.pro/public-workspace/H6vffRmJbCfA-r3kq_36_](https://app.affine.pro/public-workspace/H6vffRmJbCfA-r3kq_36_)

You can use AFFiNE to write your article, contact [ShortCipher](https://github.com/ShortCipher5) to request permissions for the AFFiNE Blog Workspace.

Each blog should abide by the following format:
```
---
title: How AFFiNE Classifies Editors
author: Chi Zhang, Yifeng Wang , Ran Chen, Fanjing Zhang
tags: Let’s make XXX
slug: how-affine-classifies-editors
description: There are so many editors today that users may find it difficult to select
created: 2022-06-27
updated: 2022-06-27
layout: blog
pulish: false
---
[cover image]
[article content]
```

`title` the title of the article

`author` the author/authors of the article in a comma sepeareted list. For a list of available authors, see [src/libs/pagesContent/user.ts](src/libs/pagesContent/user.ts). Profile images are taken from the [public](public) folder.

`tags` the tag, or rather categorey, of the article

`slug` the unique url for the article `https://affine.pro/blog/{slug}` - do not use special characters and replace ` ` (spaces) with `-`

`description` a small description to the article, no more than 2 sentences

`created` this should be the publish date

`updated` this should be set as the publish date, and only this date is updated when edits are made

`layout` should generally stay as `blog`

`publish` set to false to ensure this article is not public, only set to `true` when the article is ready for publishing (will be published as soon as set to true)

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

Then you can open http://localhost:3000 in browser.

### build

Following command will generate static files in `out/`.

```
pnpm build
```
### algolia search api

In Development environment, search is not working. It uses three environments:

* `NEXT_PUBLIC_ALGOLIA_APP_ID`: Application ID
* `ALGOLIA_SEARCH_KEY`: Search-Only API Key
* `NEXT_PUBLIC_ALGOLIA_INDEX_NAME`: Index Name
* `ALGOLIA_SEARCH_ADMIN_KEY`: Admin API Key

You can create your own algolia account and index, then export the environments.
[https://www.algolia.com/](https://www.algolia.com/)

## Knowledge you should know

[Github Flavor Markdown(GFM)](https://github.github.com/gfm/)

[Git](https://git-scm.com/book/en/v2)
