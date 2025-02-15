// 1. Falsy 한 값 조건문에서 거짓으로 판단되는 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n; // BigInteger

if(!f1){
    console.log("falsy");
}

// 2. Trusy 한 값
// -> 7가지 Falsy 한 값들 제외한 나머지 모든 값
let t1 = "Hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

if(t4){
    console.log("Truthy");
}

// 3. 활용 사례
function printName(person){
    if(!person){ // undefined나 null 값은 전부 Falsy 하기때문에 조건을 탄다.
        console.log("person의 값이 없음");
        return;
    }
    console.log(person.name);
}

let person = {name : "정원석"};
printName(person);
