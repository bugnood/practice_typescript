"use strict";
// const calcBMI = ({
//     height, weight
// }: Human): number => {
//     return weight / height ** 2;
// };
const uhyo = { height: 1.84, weight: 72 };
// console.log(calcBMI(uhyo));
// 4.1.5：アロー関数の省略形
const calcBMI = ({ height, weight }) => weight / height ** 2;
console.log(calcBMI(uhyo));
