// Dynamic Type
// 처음 foo는 숫자 42를 할당
let foo = 42;
// 재할당으로 문자열 bar를 할당
foo = 'bar';
// 재할당으로 true를 할당
foo = true;

console.log(typeof foo);

// Primitive Types
// String
const name = "kang";

// Number
const age = 27;

// Boolean
const hasJob = true;

// null
const car = null;

// Undefined
let anything;

// Symbol
const sym = Symbol();

// Object Types
// Array
const hobbies = ['walking', 'books'];

// Object
const address = {
    province: '경기도',
    city: '성남시'
}

console.log(typeof address);
// 해당 값이 배열인지 아닌지 판단하는 메서드는 Array.isArray()를 사용한다.
console.log(Array.isArray(hobbies));