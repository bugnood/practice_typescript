// 4.1.1：関数宣言
function range(min: number, max: number): number[] {
    const result = [];
    for (let i = min; i <= max; i++) {
        result.push(i);
    }
    return result;
}
console.log(range(5, 10));