(window.webpackJsonp=window.webpackJsonp||[]).push([[344],{1020:function(n,t){n.exports='### prettier 的使用\n\n```\nyarn add prettier -D\n```\n\n`prettier` 项目的全部文件\n\n```\n"scripts": {\n  "format": "prettier --write \\"**/*.+(js|jsx|json|yml|yaml|css|less|scss|ts|tsx|md|mdx|graphql|vue)\\""\n},\n```\n\n--list-diffetent: 列出需要 prettier 的列表\n\n```js\n"format": "npm run prettier -- --write",\n"prettier": "prettier \\"**/*.+(js|jsx|json|yml|yaml|css|less|scss|ts|tsx|md|graphql|mdx)\\"",\n"validate": "npm run lint && npm run prettier -- --list-different"\n```\n\n* `hawsky`: 内置大量可以配合 git 命令执行的钩子\n* `lint-staged`: 把范围缩小为操作更改的文件'}}]);