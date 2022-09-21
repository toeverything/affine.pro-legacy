---
title: 安装
---

## 环境要求

Before you follow the rest of this guide you'll want to make sure you have installed [Node.js](https://nodejs.org/)(>=16) and [pnpm](https://pnpm.io/). You'll also need Git setup to pull our source code from GitHub.
We also recommend using an IDE, such as [VSCode](https://code.visualstudio.com/), and the nx console plugin is recommended for creating dependencies.

## 安装

Clone our GitHub

```bash
git clone https://github.com/toeverything/AFFiNE.git
```

Select the master branch

```bash
cd AFFiNE && git checkout master
```

Install dependencies

```bash
pnpm install
```

Start AFFiNE

```bash
pnpm start
```

Default settings will run AFFiNE on localhost, port 4200 - http://localhost:4200

## 更多配置

The `.env.local` file can be found in the project folder. You can add the following variable to enable the development environment.

```
NODE_ENV=development
```

For git-cz functionality, please install the corresponding dependencies globally.

```bash
npm install -g commitizen conventional-changelog conventional-changelog-cli
```
