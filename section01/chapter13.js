// 1. 콜백함수(callback Function)
// 자신이 아닌 다른 함수에, 인수로써 전달된 함수를 의미 함
function main(value){
    console.log(1);
    console.log(2);
    value();
    console.log("end");
}

function sub(){
    console.log("i am sub");
}

main(sub);

main(() => {
    console.log("call back");
});

// 2. call back 함수의 활용
function repeat(count, callBack){
    for(let idx = 1; idx <= count; idx++){
        callBack(idx);
    }
}

repeat(5,function(idx){
    console.log(idx);
});

repeat(5,function(idx){
    console.log(idx*2);
});

repeat(5,(idx) =>{
    console.log(idx*3);
});

