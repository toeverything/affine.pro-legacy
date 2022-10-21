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

There are so many editors today that users may find it difficult to select. Nevertheless, there is still no clear standard to classify them. Many editors share very similar features and even UIs, whilst only having difference in nuance. Words like “Notion-like editor” may tell you what an editor is like, but does little help for recognizing the editor’s technical architecture. The lack of generic terms is not convenient neither for users nor developers.

For a better understanding of the current world of editors, we propose a four-tier classification system which is defined by the editors’ capability.

## A0 Editor

The A0 Editor is based directly on the document.execCommand API historically provided by browser vendors. Since this API is lack of standardization, all of its behaviors are dependent on the vendor’s implementation. At this point, the editor's data model is exactly the HTML in the browser.

Due to its low technical threshold, it does not require much investment to build an A0 Editor. The early CKEditor was a standard A0 Editor.

However, A0 Editor lacks room for customization. With the [deprecated](https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand) document.execCommand functionality, it is difficult to fix bugs and override certain behaviors, which makes it mostly not a good idea if you are going to build your real-world business on it.

## A1 Editor

A1 Editor has changed from a full dependency on browser behavior to a partial dependency, with its own controlled data model that can update the content on the page based on the changes in its own model.

However, it still has some dependencies on browser platform capabilities, for example, it still relies on browser highlighting and needs to hand over large sections of text to the browser for typesetting.

A1 Editor makes full use of a web browser and meets most business scenarios. [Quill](https://quilljs.com/), [Slate](https://github.com/ianstormtaylor/slate) and other mainstream open-source rich text editors fall into this category.

However, the capability of A1 Editor is limited by the browser. It is difficult for an A1 Editor to execute layout and selection.

## A2 Editor

A2 Editor is A1 Editor with its selection area (or so called _blocks_) implements one-way data flow. In this way, we are able to jump out of the limitations of the browser selection mechanism, making it customizable. Affine is currently an A2 Editor.

## A3 Editor

A3 Editor has fulfilled all the needs about selection and layout. It is like developing a browser within a browser. It implements the text typesetting process from shaping to layout, which means it knows exactly how much each character glyph offsets on the canvas. It needs to use a 2D [immediate mode](https://en.wikipedia.org/wiki/Immediate_mode_%28computer_graphics%29) graphical API like HTML5 [canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) or [Skia](https://skia.org/docs/user/modules/canvaskit/) to render the content, instead of [retained mode](https://en.wikipedia.org/wiki/Retained_mode) GUI like DOM. Google Docs and Office Online are A3 Editors and probably the only two A3 Editors so far.

Developing A3 Editor is not easy. It is costly in terms of both money and time, and may not be the best idea for a startup company.

To sum up, the higher up the level you go, the more you need to get out of the comfort zone that browsers provide you with and implement a full tech stack of classical GUI applications in the web page on your own. It's an engineering tradeoff between convenience and controllability. If you need to make decision on your own editor architecture, we hope these categories can be helpful to you.
