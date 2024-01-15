// Strict Mode 적용 방법
// "use strict" => 해당 파일에 엄격한 모드가 적용이 된다. 즉, 느슨한 모드를 엄격한 모드로 변환시킨다.
"user strict"


// 만약, 함수에만 엄격한 모드를 적용할 경우 다음과 같이 구현할 수 있다.
function sum(a, b) {
    "use strict"
    return a + b;
}

class Cat {

}


// Strict Mode 특징

let greeting = 'hello';

// 위의 greeting 변수와 다른 변수 값을 넣어도 어떠한 에러도 없이 출력된다.
// 만약, "user strict"을 사용하게 되면, 에러가 발생하게 된다. (아직 정의되지 않았다는 에러가 발생)
greating = 'hi';

console.log(greeting);
console.log(greeting, window.greating);


// 느슨 모드에서는 undefined, NaN에 값을 할당하면 에러가 발생하지 않지만, 엄격 모드에서는 undefined, NaN 값에 할당을 허용하지 않는다.
undefined = 7;
NaN = 10;

console.log(undefined);
console.log(NaN);


// 느슨 모드에서는 readOnly의 값을 할당할 수 없는데도 불구하고 다음과 같이 구현해도 에러가 발생하지 않는다.
// 반면, 엄격 모드에서는 할당할 수 없는 값을 할당했다는 에러 문구가 출력된다.
const obj = {};

Object.defineProperty(obj, "readOnly",
    { writable: false, value: 7 });
console.log(obj);

obj.readOnly = 10;
console.log(obj);


// 해당 예제도 위의 내용도 동일하도록 수정할 수 없는 내역을 수정하려고 한다.
const obj = {
    get readOnly() {
        return 7;
    }
};
console.log(obj.readOnly);

obj.readOnly = 10;
console.log(obj.readOnly);


// 느슨 모드에서는 잘못된 매개변수를 가져와서 사용해도 에러 없이 사용할 수 있다.
// 반면, 엄격 모드는 매개변수가 잘못되었다는 에러가 발생한다.
function add(a, a, b) {
    return a + a + b;
}
console.log(add(1, 2, 3));


"string".prop = 7;
console.log("string".prop);


function sum(a, b) {
    console.log(this);  // 함수 안에서 this는 window를 가리킨다. 그러나 엄격 모드에서는 undefined를 가리키게 된다.
    return a + b;
}
console.log(this);
sum.bind(this)(1, 2);   // undefined를 가리키는 것에 window를 가리키도록 하기 위해서는 bind 메서드를 사용하면 된다.


function sum(a, b) {
    a = 10
    return [a + b,
    arguments[0] + arguments[1]];
}
console.log(sum(1, 2));