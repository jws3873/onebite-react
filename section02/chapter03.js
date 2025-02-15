// 1. 배열의 구조분해 할당
let arr = [1,2,3];
let [one, tow, tree, four = 4] = arr;

// 2. 객체의 구조분해 할당
let person = {
    name : "정원석",
    age : 27,
    hobby : "테니스",
    extra : "hello"
};

let {name, age, hobby, extra} = person;

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개 변수룰 막는 방법
const func = ({name,age,hobby,extra})=>{
    console.log(name,age,hobby,extra);
}
func(person);




