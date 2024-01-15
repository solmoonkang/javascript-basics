let val;

// JavaScript 함수를 사용해서 변환
// Number to String
val = String(111);
val = String(8 + 4);

// Boolean to String
val = String(false);

// Date to String
val = String(new Date());

// Array to String
val = String([1,2,3,4,5]);

// toString
val = (5).toString();

// String to Number
val = Number('1');
// true는 1을, false는 0을 출력한다.
val = Number(false);
val = Number(null);
// NaN = Not a Number
val = Number([1,2,3])

val = parseInt('111.40');
val = parseFloat('111.40');

console.log(val);
console.log(typeof val);
console.log(val.length);

// JavaScript 자체에 의해 변환
const val1 = String(2);
// val2의 값을 자동으로 String형으로 변환
const val2 = 3;
const sum = val1 + val2;

console.log(sum);
console.log(typeof sum);