// 1. Spread 연산자
// -> Spread : 흩뿌리다, 펼치다 라는 뜻
// -> 객체나 배열에 저장된 여러개의 값을 제대로 흩뿌려주는 역할

let arr1 = [1,2,3];
let arr2 = [4,...arr1,5,6];

let obj1 = {
    a : 1,
    b : 2,
}
let obj2 = {
    ...obj1,
    c : 3,
    d : 4,
};

function funcA(p1,p2,p3){
    // console.log(p1,p2,p3);
}

funcA(...arr1);

// 2. Rest매개변수
// -> Rest는 나머지, 나머지 매개변수
function funcB(one,tow,...rest){ // Rest 매개변수는 뒤에 추가적인 변수를 선언할 수 없다. rest안에 나머지 모든 요소가 들어가기 때문
    console.log(one);
    console.log(tow);
    console.log(rest);
}
funcB(...arr1);


