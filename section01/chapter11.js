// function 함수

// 인수
let area = getArea(10,20);
console.log(area);

// 호이스팅
// -> 끌어올리다.
function getArea(width,height){ // 매개변수
    let area = width*height;
    function another(){ // 중첩함수
        console.log("another");
    }
    another();
    return area; // 반환값
}