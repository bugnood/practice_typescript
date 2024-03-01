// 3.7.3：正規表現を使う方法
const result = "Hello, abbbbbbc world! abc".match(/a(b+)c/);
if (result !== null) {
    console.log(result[0]);
    console.log(result[1]);
}

const result_1 = "Hello, abbbbbbc world! abc".match(/a(?<worldName>b+)c/);
if (result_1 !== null) {
    console.log(result_1.groups)
}