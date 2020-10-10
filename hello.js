
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

log(global.color);





