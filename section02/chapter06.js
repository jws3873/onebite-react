// 1. 반복문으로 배열과 객체 순환하기
let arr = [1,2,3];

// 1.1 배열 인덱스
for(let i=0;i<arr.length;i++){
    // console.log(arr[i]);
}

let arr2 = [4,5,6,7,8];
for(let i=0;i<arr2.length;i++){
    // console.log(arr2[i]);
}

// 1.2 for of 반복문
for(let item of arr){
    // console.log(item);
}

// 2. 객체 순회
let person = {
    name : "정원석",
    age : 30,
    hobby : "테니스",
};

// 2.1 Object.key 사용
// -> 객체에서 Key 값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person);

for(let i = 0; i<keys.length;i++){
    // console.log(keys[i]);
}
for(let key of keys){
    const value = person[key];
    // console.log(key, value);
}

// 2.2 Object.vlaues
// -> 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);
for(let value of values){
    // console.log(value);
}

// 2.3 for in 배열에서는 인덱스를 뽑아내고 객체에서는 key값을 뽑아낸다.
for(let key in person){
    const value = person[key];
    console.log(key, value);
}

// 객체에서는 in을 사용하고 배열에서는 of를 사용하자