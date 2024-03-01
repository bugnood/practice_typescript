// 4.1.4：アロー関数
type Human = {
    height: number,
    weight: number,
};
// const calcBMI = ({
//     height, weight
// }: Human): number => {
//     return weight / height ** 2;
// };
const uhyo: Human = { height: 1.84, weight: 72 };
// console.log(calcBMI(uhyo));

// 4.1.5：アロー関数の省略形
const calcBMI = ({ height, weight }: Human): number => weight / height ** 2;
console.log(calcBMI(uhyo));