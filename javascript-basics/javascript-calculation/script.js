const num1 = 20;
const num2 = 10;

let val;

// JavaScript Calculation
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// Math Object
val = Math.E;
val = Math.PI;
// 가장 가까운 정수로 반환한다.
val = Math.round(2.4);
// 해당 값을 올림한다.
val = Math.ceil(2.4);
// 해당 값을 내린다.
val = Math.floor(2.8);
// 절대값을 만들어준다.
val = Math.abs(-2);
// 가장 작은 값을 반환한다.
val = Math.min(2,3,4,5,6,7,8,-1);
// 가장 큰 값을 반환한다.
val = Math.max(2,3,4,5,6,7,8);
// 0~1 사이의 무작위 값을 반환한다.
val = Math.random();
// 1부터 20까지의 무작위 값을 반환한다.
val = Math.floor(Math.random() * 3 + 1);

console.log(val);