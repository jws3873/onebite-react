// 스코프(Scope)
// 범위, 변수나 함수에 접근하거나 호츌할 수 있는 범위를 말함
// -> 전역(전체 영역) 스코프 / 지역(특정 영역) 스코프
// -> 전역 스코프 : 전체 영역에서 접근 가능
// -> 지역스코프 : 특정 영역애서 접근가능
let a = 1; // 전역스코프
function funcA(){
    let b = 2; // 지역스코프
    console.log(a);
}

funcA();

if(true){
    let c = 1;
}

for(idx = 0;idx < 10; idx++){
    let d = 1;
}



