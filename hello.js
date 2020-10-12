
var now = new Date();
console.log(now.toDateString());
var log = console.log;

// let s1 = "this is a text";

// s1.color = "red";

// log(s1.color);

// let b = Boolean(s1.color);

// log(b.toString());

// let falseObj = new Boolean(false);

// log(falseObj && true);

// log(falseObj instanceof Boolean);

// log(typeof falseObj);


let n1 = Number(0.1);
let n2 = Number(0.2);

let sum = n1 + n2;

log(sum);

let message = "ab☺de";

log(message.charAt(2));
log(message.charCodeAt(2));


for (const c of "123456") {
    log(c);
}

var global = () => this;
var color = "red";
// log(global.color);


let randomVar = [];
for (let i = 0; i < 10000; i++) {
    let tmp = Math.random();
    randomVar.push(tmp);
}

log(Math.max(...randomVar));


const arr = [1, 2, 3, 4, 5, 6, 7, 8, "1", "2", "3", "4"];

const arrKey = arr.keys();
const arrVal = arr.values();
const arrEntr = arr.entries();


let person = {
    name: "Jack",
    toString() {
        return "Jack";
    },
    toLocalString() {
        return toString();
    }
}


log(person);


let stack = [];

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(1);
stack.push(10);
stack.push(-10);


// log(stack.sort((v1, v2) => v1 - v2));
// log(stack.reverse());

// 缓存
// TODO 
const buf = new ArrayBuffer(1024);
log(buf.byteLength);
// 使用视图，DataView来进行读写操作
const view = new DataView(buf);

view.setUint8(0, 0x80);
view.setUint8(1, 0x01);

log(view.getUint16(0));
log(view.getUint16(0, true));




