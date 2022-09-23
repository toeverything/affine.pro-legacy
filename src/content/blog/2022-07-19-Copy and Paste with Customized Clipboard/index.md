---
title: Copy and Paste with Customized Clipboard
author: Xiaodong Zuo, Yifeng Wang , Fanjing Zhang
tags: Let’s make XXX
cover: ./cover.jpg
description: Copy and Paste are two of the most basic features for a practical editor
created: 2022-07-19
updated: 2022-07-19
layout: blog
---

Copy and Paste are two of the most basic features for a practical editor. User can copy pieces of data and paste it to any designated place, and that it, simple but useful. However, there is no lack of problems when it comes to implementing them in reality.

## Basics

The basic logic of implementing clipboard looks as such.

![](./572db65fcbe0cc8e0b7d0e9b0b280d010f9be608-1280x170.png)

_Copying_ is to cache the relevant data into somewhere with a specific data structure, and _pasting_ is to take the cached data out from the space and add it into the target document.

So how do we cache data? There are several options.

- By using memory space within the application: This is simple, but such a clipboard will only be valid in that application.
- By using native clipboard (including the browser clipboard): This makes the clipboard sharable on a single device.
- By using server cache: This allows the Copy and Paste feature to be used cross-platform.

## Copy and Paste in AFFINE

So far, AFFINE runs mainly in the browser and therefore relies heavily on the browser clipboard for copy and paste. In this case, we set up several requirements for our clipboard.

- Write data asynchronously: On one hand, when copying a large amount of content, synchronously writing data causes lag and thus affects user experience; on the other hand, some data that is not loaded in memory still has to be obtained asynchronously.
- Customize MIME types: Data format varies across products, but MIME types available within clipboards cannot satisfy our needs. Transferring data into the common format however will lead to the loss of original information.
- Be effectively offline: Our product can be used offline.
- Be Functional with http and https protocols: We support user self-deployment.

### Implementation

To be specific, our current solution is to intercept copy, cut, and paste events, customize data content and write it into the clipboard by document.execCommand('copy').

This approach has some caveats.

- document.execCommand() is [deprecated](https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand) and no longer maintained by Web standards;
- Although most browsers support [execCommand](https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand), developers still need to consider their compatibility.

### **Why not clipboard.js?**

[Clipboard.js](https://clipboardjs.com/) is a popular clipboard library which also involves copy, cut, and paste events and execCommand API. However we found it also has some obvious cons:

- No support for customizing MIME types.
- No support for writing multiple MIME types simultaneously.

### **Why not Asynchronous Clipboard API**？

Asynchronous [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API) is a newer web standard, but still not perfect:

- It requires user authorization.
- It’s only available in secure contexts such as localhost and https.
- Its browser compatibility is relatively low.

Besides, browsers will also modify clipboard data, this sometimes leads to the loss of certain meta data, e.g. style information.

### Related: Browser plug-in

Using browser plug-in is also a common approach for implementing customized clipboard. However, it’s generally not a good choice as it requires users to add plug-ins beforehand.

## Conclusion

We won’t say that we have found the best approach as each approach has its pros and cons. Combining multiple approach is possible, but then we have to consider the problem of data consistency. We still have issues to overcome, so please look forward to our subsequent updates!
