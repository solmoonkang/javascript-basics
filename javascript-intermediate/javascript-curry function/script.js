const makeFood = (ingredient1) => {
    return (ingredient2) => {
        return (ingredient3) => {
            return `${ingredient1}, ${ingredient2}, ${ingredient3}`;
        }
    }
}

const hamburger = makeFood("Bread")("Ham")("Tomato");
console.log(hamburger);



// makeFood 함수와 cleanerMakeFood 함수는 서로 같은 함수이다.
const cleanerMakeFood = ingredient1 => ingredient2 => ingredient3 =>
    `${ingredient1}, ${ingredient2}, ${ingredient3}`;

const newHamburger = cleanerMakeFood("Bread")("Ham")("Tomato"); // 해당 매개변수가 ingredient와 일치해야 정상적인 출력을 할 수 있다.
console.log(newHamburger);




const hamburger1 = cleanerMakeFood("Bread");
console.log(hamburger1);
const hamburger2 = hamburger1("Ham")
console.log(hamburger2);
const hamburger3 = hamburger2("Tomato")
console.log(hamburger3);

// one more example
const sum = (x, y) => x + y;

const curriedSum = x => y => x + y;

console.log(sum(10, 20));
console.log(curriedSum(10));
console.log(curriedSum(10)(20));

const tenPlus = curriedSum(10);
console.log(tenPlus);
console.log(tenPlus(100));




function log(date, importance, message) {
    alert(`[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`);
}

log(new Date(), "DEBUG", "some debug");


// currying function
// 위의 log 함수를 다음과 같이 curry 함수로 변환할 수 있다.
function curry(f) {
    return function (a) {
        return function (b) {
            return function (c) {
                return f(a, b, c);
            }
        };
    };
}

const curriedLog = curry(log);
// log(new Date(), "DEBUG", "some debug"); 위와 같이 호출하던 log 함수를 다음과 같이 변환할 수 있다.
curriedLog(new Date())("DEBUG")("some debug");



// logNow 는 log 의 첫 번째 인수가 고정된 partial이 될 것입니다.
let logNow = curriedLog(new Date());
// use it
logNow("INFO", "message"); // [HH:mm] INFO message

function curry(func) {

    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function (...args2) {
                return curried.apply(this, args.concat(args2));
            }
        }
    };

}

const curriedLog2 = curry(log);
curriedLog2(new Date())("DEBUG")("some debug");



// 만약, 파라미터가 몇 개 인지 상관없이 한 번에 처리하기 위해서는 다음과 같이 함수를 구현할 수 있다.
function curry(func) {

    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function (...args2) {
                return curried.apply(this, args.concat(args2));
            }
        }
    };
}
const sum2 = (x, y, z) => x + y + z;

const curried = curry(sum2);
// sum2에 매개변수를 추가하면, log 함수에 sum2에 추가한 매개변수만큼 값을 추가해주면 된다.
console.log(curried(1)(2)(3));