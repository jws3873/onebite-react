// 함수표현식과 화살표 함수
function funcA(){
    // console.log("funcA");
}
// 함수 자체를 변수에 담을 수 있다
let varA = funcA;
// console.log(varA);
varA();

// 값으로서 함수를 선언
// 호이스팅의 대상이 되지 않는다
let varB = function(){ // 익명함수
    // console.log("funcB");
}

varB();

// 2. 화살표 함수
let varC = (value) => {
    console.log(value);
    return value + 1;
}
console.log(varC(10));