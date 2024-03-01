// 3.7.4：Mspオブジェクト、Setオブジェクト
const map: Map<string, number> = new Map();
map.set("foo", 1234);
console.log(map.get("foo"));
console.log(map.get("bar"));