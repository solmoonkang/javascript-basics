// var: 중복 선언과 재할당 가능
var greeting = 'hello';
console.log(greeting);

var greeting = 'hi';
console.log(greeting);

greeting = 'how are you?';
console.log(greeting);

// let: 중복 선언 불가, 재할당 가능
let greet = 'hello';
console.log(greeting);

// 다음과 같이 선언할 경우 Error가 발생
// let greet = 'hi';
// console.log(greeting);

greet = 'hi';
console.log(greeting);

// const: 중복 선언과 재할당 불가
const greetings = 'hello';
console.log(greetings);

// 다음과 같이 선언할 경우 Error가 발생
// const greetings = 'hi';
// console.log(greetings);

// greetings = 'hi';
// console.log(greetings);