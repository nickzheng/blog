(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{857:function(n,I){n.exports="### title\n\n罗马数字包含以下七种字符:  I,  V,  X,  L, C, D 和 M。\n\n字符          数值\nI             1\nV             5\nX             10\nL             50\nC             100\nD             500\nM             1000\n例如,  罗马数字 2 写做 II , 即为两个并列的 1。12 写做 XII , 即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。\n\n通常情况下, 罗马数字中小的数字在大的数字的右边。但也存在特例, 例如 4 不写做 IIII, 而是 IV。数字 1 在数字 5 的左边, 所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地, 数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况:\n\nI 可以放在 V (5) 和 X (10) 的左边, 来表示 4 和 9。\nX 可以放在 L (50) 和 C (100) 的左边, 来表示 40 和 90。\nC 可以放在 D (500) 和 M (1000) 的左边, 来表示 400 和 900。\n给定一个整数, 将其转为罗马数字。输入确保在 1 到 3999 的范围内。\n\n示例 1:\n\n输入: 3\n输出: \"III\"\n示例 2:\n\n输入: 4\n输出: \"IV\"\n示例 3:\n\n输入: 9\n输出: \"IX\"\n示例 4:\n\n输入: 58\n输出: \"LVIII\"\n解释: C = 100, L = 50, XXX = 30, III = 3.\n示例 5:\n\n输入: 1994\n输出: \"MCMXCIV\"\n解释: M = 1000, CM = 900, XC = 90, IV = 4.\n\n### analyze\n\n看了解答~\n\n```js\n/**\n * @param {number} num\n * @return {string}\n */\nvar intToRoman = function (num) {\n  let result = ''\n  const intArr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]\n  const RomanArr = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']\n\n  for (let i = 0; i < intArr.length; i++) {\n    while (num % intArr[i] < num) {\n      result += RomanArr[i]\n      num -= intArr[i]\n    }\n  }\n\n  return result\n}\n```"}}]);