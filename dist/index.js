"use strict";
// 4.1.7：可変長引数
const sum = (...args) => {
    let result = 0;
    for (const num of args) {
        result += num;
    }
    return result;
};
console.log(sum(1, 10, 100));
console.log(sum(123, 456));
console.log(sum());
