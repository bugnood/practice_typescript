// 3.8.1：力試し
type User = {
    name: string,
    age: number,
    premiumUser: boolean,
}

const data: string = `
uhyo,26,1
jhon Smith,17,0
Mary Sue,14,1
`;

// dataの値を格納する配列を作る
const arr = data.split("\n");

// User型のオブジェクトを作る
let userObj = [];
for (const u of arr) {
    if (u !== '') {
        userObj = u.split(",");
        console.log(userObj);
    }
}
// const userObj: User = "配列を入れる（コンマで区切った値）":

// オブジェクトの入った配列を作る user(obj1, obj2, obj3...)
const users = [];

for (const user of users) {
    if (user.premiumUser) {
        console.log(`${user.name}(${user.age})はプレミアムユーザです。`);
    } else {
        console.log(`${user.name}(${user.age})はプレミアムユーザではありません。`);
    }
}

// usersオブジェクトを作る
// usersの中身は、name,age,premiumUserの3つのプロパティ
// オブジェクトの入った配列を作る user(obj1, obj2, obj3...)
// User型のオブジェクトを作る