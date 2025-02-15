// promise 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트의 내장 객체
// 대기(Pending) : 아직 작업이 완료되지 않은 상태
// 해결 : resolve
// 성공(Fulfilled) : 비동기 작업이 성공적으로 마무리된 상태
// 거부 : reject
// 실패(Rejected) : 비동기 작업이 실패한 상태

function add10(num){
    const promise = new Promise((resolve,reject)=>{
        // 비동기작업 실행하는 함수
        // excutor
    
        setTimeout(()=>{
            if(typeof num === 'number'){
                resolve(num+10);
            }else{
                reject("num이 숫자가 아닙니다.")
            }
        },2000);
    });
    return promise;
}

add10(0)
  .then((result)=>{
    console.log(result);
    return add10(result);
}).then((result)=>{
    console.log(result);
    return add10(result);
}).then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
})

// then 메서드 promise 의 비동기 작업이 성공했을 경우에만
// -> 그 후에
// promise의 then 메서드는 promise 객체를 반환한다.
// promise 체이닝
// promise.then((value)=>{
//     console.log(value);
// }).catch((error)=>{
//     console.log(error);
// });

// catch 비동기 작업이 실패했을 경우
// promise.catch((error)=>{
//     console.log(error);
// });
