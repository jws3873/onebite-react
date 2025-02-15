// 객체2
// 1. 상수객체
const animal = {
    type : "고양이",
    name : "나비",
    color : "black",
}

animal.age = 2; // 추가
animal.name = "까망이"; // 수정
delete animal.color; // 삭제

// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함
const person = {
    name : "정원석",
    // 메서드
    sayHi : function(){
        console.log("안녕!");
    },
    sayHi2 : ()=>{
        console.log("안녕2");
    },
    // 메서드 선언
    sayHi3(){
        console.log("안녕3");
    }
};

person.sayHi();
person["sayHi"]();