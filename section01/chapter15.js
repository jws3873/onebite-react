// 객체란(Object)
// 객체를 이용하면 현실세계에 존재하는 어떤 사물이나 개념을 표현하기 용이함
// 1. 객체생성 
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴(대부분 사용)

// 2. 객체 프로퍼티 (객체 속성)
let person = {
    name : "정원석",
    age : 30,
    hobby : "테니스",
    job : "FE Developer",
    extra : {},
    10 : 20,
    "like cat" : true,
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근(점 표기법, 괄호 표기법)
// 존쟈하지 않는 프로퍼티에 접근하게 되면 Undefine
let name = person.name2;

// 쌍따옴표를 이용해야한다. 그렇지 않으면 변수로 인식한다.
let age = person["age"];

let property = "hobby";
let hobby = person[property];

// 3.2 새로운 프로퍼티를 추가하는 방법
person.job = "fe developer";
person["favoriteFood"] = "떡볶이";

// 3.3 프로퍼타를 수정하는 방법
person.job = "educator";
person["favoriteFood"] = "초콜랏";

// 3.4 프로퍼티를 삭제하는 방법
delete person.job;
delete person["favoriteFood"];

// 3.5 프로퍼타의 존재 유무를 확인하는 방법(in 연산자)
let result1 = "name" in person;
let result2 = "cat" in person;
console.log(result1);


