---
title: AFFiNE Alpha is coming! The first version is for the Markdown Editor!
author: Chi Zhang, Yifeng Wang , Ran Chen, Fanjing Zhang
tags: Release Note
cover: ./cover.jpg
created: 2022-10-25
updated: 2022-10-25
layout: blog
---

AFFiNE Alpha will be launched soon! Thank you very much for your continued interest and trust in the AFFiNE team.
Since the launch of AFFiNE pre-Alpha, we have received many private messages and emails from our users, and they have given us lots of feedback. We realised that there were still many problems with AFFiNE pre-Alpha, whether that was user experience, page stability, or something else. After considering many aspects, we decided to refactor AFFiNE - start again from the ground up and we are now excited to announce AFFiNE Alpha.
**Key words**：Markdown, Shortcuts, Dark Mode, Export, Page redesign, Export.

## The Goal of AFFiNE Alpha

  In order to be able to carry more complex functions in future development while **maintaining the stability of AFFiNE**, our development team decided to refactor the project and **standardise the code structure**. The new version of AFFiNE Alpha will provide a more stable experience for users and a more organised structure for developers.
  Secondly, the refactoring also saw a lot of changes to the design of pages. To a certain extent, a good UI design solution makes the user experience more fluid. In previous versions, users have been confused by the design of the pages. Our product and design teams have held many meetings and long conversations about these issues and have come up with a more user-focussed design for AFFiNE Alpha. The aim is to give users **a better visual effect and operating experience**.
  
## 1. What are the advantages of AFFiNE Alpha?

  This rebuilt AFFiNE will provide users with **a smoother editing experience and a more stable system environment**. We will ensure a more focused creative environment for our users. **Markdown was also a key focus of this refactoring**. We have improved the Markdown system and overcome some previous typographical issues. For the Markdown syntax system, we also consider how 'deletion' and 'secondary editing' can be implemented, while ensuring that the style is aesthetically pleasing.
  By collating user feedback, we have also learnt that there is **a strong demand for dark mode**. This is why AFFiNE Alpha has been built with a dark mode as a core feature, which can be developed with new features to offer a much smoother light mode/dark mode transition and editing experience. In addition, export is another new key features of this AFFiNE Alpha release. The functionality of previous versions were limited and made it hard to truly export data for other means, as .affine files were onlyy really readable by AFFiNE. This imposes many limitations on users. So as we go live, improved **export support was one of our focuses** and now you can export your data into various file types in this alpha release. We will also introduce you to each of these advantages in turn in the following sections.
  
## 2. Key Feature Points
### 2.1 Basic editing experience enhancement
  To address the shortcomings of AFFiNE pre-Alpha, Alpha features the following optimisations to enhance the basic editing experience for users:
  - **Shortcut system**
    While we had previously provided various shortcut keys, there were issues with styling and even failure of certain operations. Now we ensure that the style is aesthetically pleasing and the shortcuts are smooth to use. Below we'll share with you some of the most popular operations and their keyboard shortcuts:

  - **Select all**
    We would like to specifically introduce you to the shortcut `Ctrl + A (Win/Linux) / CMD + A (Mac)`. Users have previously commented that when using the Select All function, sometimes a paragraph was selected and sometimes the full text was selected. It was not clear what the intended effect was and how the select all feature should operate. **In this release, the select all feature directly selects the full text**.

### 2.2 AFFiNE Editor for Markdown
  Markdown presents a fast, efficient and standardized way to edit and format text. You can evoke your required text style directly through a specific identifier, without the need to select function keys with the mouse. This way of editing can greatly increase the speed of the user's work and allows them to focus on the content.
  Markdown is actually quite simple to use, and in layman's terms, you can also think of Markdown syntax as a shortcut. The following list shows the Markdown syntax supported by AFFiNE Alpha.
  
  **Note: Markdown syntax only supports inline code style in this version, block code style will be available in a future update.**
  
### 2.3 Dark Mode
  The introduction of a dark mode is another big difference in AFFiNE Alpha. During our communication with users, we found that many of them requested dark mode support. We've implemented this feature for Paper Mode but have **not fully implemented features for Edgeless mode**. This is because there are more details to consider when switching from Page Mode to Edgeless Mode. In order to give users a better experience, we will go live after we have finalised these details.

### 2.4 Export
  In our previous release import/export features were limited to .affine files and in user feedback many users have commented that the import/export features need to be more flexible. As we continue to consider what formats to natively support, the current release boasts **export support for both HTML and Markdown file types in this version**. With greater support coming in future updates.
  
## Other Things Worth Mentioning
- Added 'Help and Feedback' section in the bottom right corner;
- AFFiNE logo activates a contact modal which gives links and details to official AFFiNE links and communities.
- New "page option" feature (located in the top right corner) which currently homes the following features:
  - Conversion between Paper/Edgeless modes;
  - Export feature.
- Conversions between Page and Edgeless
  - Paper Mode to Edgeless Mode - everything in Paper Mode will be mapped to Text in Edgeless;
  - Edgeless Mode to Paper Mode -  content will be arranged in chronological order of creation and a divider added between Blocks.
- Single page editing - currently editing multiple docs/pages is not supported.

## Thanks again to everyone
Once again, a big thanks to our users and ambassadors. Please do come and join our groups, whether you have feedback, would like to start a discussion, or even just to listen and see what we are doing.
**Please feel free to contact us if you encounter bugs and have some new features**. Thank you sincerely for your support!
- Bugs: https://github.com/toeverything/AFFiNE/issues/new/choose
- Features: https://feedback.affine.pro/boards/ambassador
