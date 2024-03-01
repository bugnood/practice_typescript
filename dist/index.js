"use strict";
// 3.7.2：正規表現
const r = /ab+c/;
console.log(r.test("abbbbbc"));
console.log(r.test("Hello, abc world!"));
console.log(r.test("ABC"));
console.log(r.test("こんにちは！"));
