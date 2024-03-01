// 4.1.2：戻り値のない関数宣言
function helloWorldTimes(n: number): void {
    for (let i = 0; i < n; i++) {
        console.log("Hello, world!");
    }
}

console.log(helloWorldTimes(5));

function helloWorldTimes2(n: number): void {
    if (n >= 100) {
        console.log(`${n}回なんて無理です！`);
        return;
    }
    for (let i = 0; i < n; i++) {
        console.log("Hello, world!");
    }
}

helloWorldTimes2(5);
helloWorldTimes2(150);