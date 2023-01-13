---
title: Abbey Wood Release Notes
author: Yipei Wei
tags: Release Notes
cover: ./cover.jpg
description: Release Notes 2023-01-13
created: 2023-01-13
updated: 2023-01-13
layout: blog
---

Thank you very much for your interest in AFFiNE! 
Some new and exciting changes for both #AFFiNE and #BlockSuite are as follows:
From BlockSuite
BlockSuite is the open-source collaborative editor project that powers the AFFiNE knowledge base.
If you have followed the AFFiNE repository, you will find that most of the bugs related to the editing experience are fixed in the Blocksuite repository.
The GitHub address for BlockSuite is: https://github.com/toeverything/blocksuite
Please note that we still strongly recommend that when you are using AFFiNE and if you wish to use GitHub directly for issue commits, you still need to choose the AFFiNE repository for commits. The bug submission link is: https://github.com/toeverything/AFFiNE/issues/new/choose
AFFiNE team members will be responsible for moving BlockSuite-related bugs to the BlockSuite repository.
Bug Fixes
In our team and users' continued effort to make AFFiNE the most reliable all-in-one knowledge base, fixing bugs is always our main concern. Here's our work over the last few days:
- Fixed: Incorrect code block short ligatures (#511)
  - https://github.com/toeverything/blocksuite/pull/511
- Fixed: Unexpected behavior of markdown shortcut when creating code block and inline code (#512)
  - https://github.com/toeverything/blocksuite/pull/512
- Fixed: Code block language not kept after refreshing page (#516)
  - https://github.com/toeverything/blocksuite/pull/516
- Fixed: Option operation not showing inside when image size is too large (#515)
  - https://github.com/toeverything/blocksuite/pull/515
- Fixed: CMD/Ctrl-A loses the cursor when the cursor is at the beginning of the line (#537)
  - https://github.com/toeverything/blocksuite/pull/537
- Fixed: The text will be inserted from the end of the line when pasting at the start of a line (#540)
  - https://github.com/toeverything/blocksuite/pull/540
- Fixed: Export HTML or Markdown format lost (#547)
  - https://github.com/toeverything/blocksuite/pull/547
Features & Refactoring
The following features can be played with in the #Blocksuite playground. The address is: https://blocksuite-toeverything.vercel.app/?init
Noted: These features still need some time to be available in the AFFiNE Alpha (https://pathfinder.affine.pro/)
- Support YDoc binary export (#509)
  - https://github.com/toeverything/blocksuite/pull/509
- Support switch edgeless display mode (#514)
  - https://github.com/toeverything/blocksuite/pull/514
- Init surface model (#517)
  - https://github.com/toeverything/blocksuite/pull/517
- Add phasor entry (#546)
  - https://github.com/toeverything/blocksuite/pull/546
- Importing markdown support image and code block (#544)
  - https://github.com/toeverything/blocksuite/pull/544
- Support drag handle in default page (#543)
  - https://github.com/toeverything/blocksuite/pull/543
  - For more details can check this post on our community site
Refactoring
- affine:group -> affine:frame (#520)
  - https://github.com/toeverything/blocksuite/pull/520
- Uniform format (#522)
  - https://github.com/toeverything/blocksuite/pull/522
- Select code block (#539)
  - https://github.com/toeverything/blocksuite/pull/539

From AFFiNE Alpha: "Abbey Wood"
Our AFFiNE GitHub address: https://github.com/toeverything/AFFiNE
Features
Recent features launched on Abbey Wood have been updated via our version introduction.
The latest Docker version can be accessed via GitHub, and we've created a new Docker user guide to help you.
We are hoping to launch a major update around Feb 10th, 2023, which can cover around 80% of the features found in our Pre-Alpha version.

Here are the official media accounts operated by AFFiNE, please feel free to contact us if you have any questions. 
- Discord: https://discord.gg/Arn7TqJBvG
- Telegram: https://t.me/affineworkos
- Twitter: https://twitter.com/AffineOfficial
- Reddit: https://www.reddit.com/r/Affine
- Medium: https://medium.com/@affineworkos
- GitHub: https://github.com/toeverything/AFFiNE
- AFFiNE Community: https://community.affine.pro/home
