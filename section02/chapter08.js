// 5가지 요소 순회 및 탐색 메서드
// 1. forEtch
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1,2,3];

arr1.forEach(function(item,idx,arr){ // 현재요소의 값, 현재반복 카운트, 전체요소
    // console.log(idx,item*2);
});

arr1.forEach((item,idx,arr)=>{
    // console.log(idx,item*2);
});

let doubledArr = [];

arr1.forEach((item)=>{
    doubledArr.push(item*2);
});
// console.log(doubledArr);

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1,2,3];
let isInclude = arr2.includes(10);
// console.log(isInclude);

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드, 값이 없을 경우 -1을 반환한다.
let arr3 = [1,2,3];
let index = arr3.indexOf(2);
// console.log(index);

let objectArr = [
    {name : "정원석"},
    {name : "홍길동"}
];
// console.log(objectArr.indexOf({name : "정원석"})); 얕은비교이기 때문에 못첮는다.
console.log(objectArr.findIndex((item)=>item.name === "홍길동"));

// 4. findIndex
// 모든 요소를  순회하면서, 콜백함수를 만족하는 그런
// 특정 요소의 인덱스(위치)를 반환하는 메서드
let arr4 = [1,2,3];
// const findedIndex = arr4.findIndex((item)=>{
//     if(item % 2 !== 0) return true;
// })
const findedIndex = arr4.findIndex((item)=> item % 2 !== 0)
// console.log(findedIndex);

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 그 요소를 그대로 반환
let arr5 = [
    {name : "정원석"},
    {name : "홍길동"},
];

const finded = arr5.find((item)=>item.name === "정원석");
console.log(finded);
