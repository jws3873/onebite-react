// 배열
// 1. 배열을 생성하는 방법
let arrA = new Array(); // 배열 생성자
let arrB = []; // 배열 리터럴(대부분 사용)

let arrC = [
    1,
    2,
    3,
    true,
    "hello",
    null,
    undefined,
    () => {},
    {},
    [],
];

// 2. 배열의 요소 접근
let item1 = arrC[0];
let item2 = arrC[1];

arrC[0] = "hello";
console.log(arrC);
