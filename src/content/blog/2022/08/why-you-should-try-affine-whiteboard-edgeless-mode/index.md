---
title: Why you should try AFFiNE whiteboard -- Edgeless Mode
author: Fangyuan Zheng, Christopher Smolak, Fanjing Zhang
tags: Release Note
cover: ./cover.jpg
description: Introduction
created: 2022-08-25
updated: 2022-08-25
layout: blog
---

**Introduction:**

Most productivity tools prefer to focus on a single thing, for example, developing a more feature-rich editor or refining whiteboard functionality. But these usually have an Achilles heel; everything you do here has to be based inside the editor or the whiteboard. This means that the efficiency and rich typography of editing in an editor can be limited on the whiteboard. AFFiNE proposes overcoming the barrier between editors and whiteboards through one-click mode switching, which has also become our whiteboard's most significant feature point. Through this article, we would like to introduce you to AFFiNE's whiteboard, which we call Edgeless Mode.

**The live demo released so far has already had some feedback from users about their experience with the whiteboard feature, and here are some of their feelings about using it.**

ID：@\_lyle\_

![](./5597f5c190467720ce0c5966d94cec61058d4674-878x504.png)

ID：Steve Ruiz

![](./b4ff381c4068a26c00b432046c9b9b922e859532-1022x282.png)

ID：Christian Piovani

![](./bfb0e53e9e4f8bc5d2baacfc79da21adeb30056d-1032x234.png)

ID: Azure

![](./23eab7a4d92f21d64c13049176e03dcb8e4068a8-1086x938.png)

**The feature introduction**

- Convert docs to Edgeless mode

AFFiNE supports mode conversion to convert doc files to whiteboard. And the data modified by users on the whiteboard can be synchronized after conversion to docs, enabling freer editing and writing.

- Rich toolbar

We added a frame function to the whiteboard for the layout of block groups, support for lines and graphics to add more possibilities for users, a paintbrush function so users can record ideas at will, and support for a laser pointer to help when collaborating in teams.

![](./42cd3693e30991279fd9f11188d85477f1de0c8c-1920x1080.gif)

- Taking notes on IPAD

The iPad and whiteboard mode are a good combination. The iPad can be a much better note-reading tool than a computer or phone because it has the right size and easy portability, making it the preferred note-taking electronic product for many people, and is why we plan to improve support. AFFiNE's support for converting documents into whiteboards provides a solid foundation for this work scenario.

- Online meeting brainstorming

A whiteboard is a good tool for brainstorming, and AFFiNE supports unlimited whiteboards, so you can brainstorm as much as you like. The rich tool support also provides you with better help.

**Technology highlights**

The second development is based on TLDraw, using Zustand to manage state and the same JWST persistence to store data as in the documentation section. The text editing part reuses the documentation code, and a lot of work is done behind the scenes to ensure that the same code works properly on both sides.

![](./a4223cdafe59716ad1d6a79d67b2cc49e9777bee-1200x834.png)

**Evaluation**

![](./9ea5194c55153ae35cc1cdba0e14e910659afba7-704x200.png)

We will focus on refactoring the design-level whiteboard pattern in the next release. You are also welcome to contact us at any time to provide suggestions on UIUX or product design.

We hope this gives you a better understanding of what the Edgeless (whiteboard) Mode is, some possible use cases, and what extra functionality it supports over similar existing systems. You're welcome to head over to our website and try it out for yourself in our demo, or deploy your own version. We invite you to offer any feedback you may have on this feature, or the product in general. We are always looking to improve, so any further questions or suggestions you have are all welcome.

- Reddit: [https://www.reddit.com/r/Affine/]()
- Discord: [https://discord.gg/Arn7TqJBvG]()
- Telegram: [https://t.me/affineworkos]()
- Twitter: [https://twitter.com/AffineOfficial]()
- Medium：[https://medium.com/@affineworkos](https://medium.com/@affineworkos)
