(window.webpackJsonp=window.webpackJsonp||[]).push([[252],{928:function(n,e){n.exports="### title\n\n给定一个字符串 s, 找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。\n\n示例 1:\n\n输入: \"babad\"\n输出: \"bab\"\n注意: \"aba\"也是一个有效答案。\n\n示例 2:\n\n输入: \"cbbd\"\n输出: \"bb\"\n\n### analyze\n\n目前的解法判断字符串 s 和它的倒序 s' 是否拥有公有字符串, 且它们的公有字符串应该符合倒序。目前用暴力法实现~~\n\n题目可以转换为求 s 和它的倒序 s' 的最长公有字符串。以后再看。\n\n```js\n/**\n * @param {string} s\n * @return {string}\n */\n\n// 暴力法 有几个用例超时\nvar longestPalindrome = function (s) {\n  const reverseS = s.split('').reverse().join('')\n  let result = '', len = 0\n  for (let i = 0; i < s.length; i++) {\n    for (let j = i; j < s.length; j++) {\n      const sliceS = s.slice(i, j + 1)\n      if (sliceS.length > len) {\n        if (reverseS.indexOf(sliceS) >= 0 && sliceS === sliceS.split('').reverse().join('')) {\n          len = sliceS.length\n          result = sliceS\n        }\n      }\n    }\n  }\n  return result\n};\n```"}}]);