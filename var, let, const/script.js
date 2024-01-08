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

// var function-level scope
function func() {
    if(true) {
    // 선언한 변수 a의 범위가 함수 레벨이므로 func 함수 내부에 있을 경우 사용이 가능하다.
    var a = 'a';
    console.log(a);
    }
    console.log(a);
}
// 해당 출력은 Error가 발생
// console.log(a);
func();

// let/const block-level scope
function funt() {
    if(true) {
        let a = 'a';
        // const 또한 마찬가지이다.
        // const a = 'a';
        console.log(a);
    }
    // let은 블록 레벨 범위이므로 범위 초과가 발생
    // console.log(a);
}
funt();

// var hoisting
console.log(greeting);
var greeting = 'hello';

// function hoisting
funa();

function funa() {
    console.log('hoisting test');
}