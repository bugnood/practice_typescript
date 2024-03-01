"use strict";
// 4.1.6：メソッド記法
const obj = {
    double(num) {
        return num * 2;
    },
    double2: (num) => num * 2,
};
console.log(obj.double(100));
console.log(obj.double2(-50));
