// Symbol
// Symbol은 유니크한 식별자를 위해서 사용한다.
const sym1 = Symbol();
const sym2 = Symbol();
console.log(sym1 === sym2); //false


// Symbol에 description을 줄 수 있다.
const sym3 = Symbol('hi');
console.log(sym3.description);



// 실제 Symbol을 사용하는 경우
let carA = {
    id: 1,
    name: 'morning',
    brand: 'kia',
    price: 1000
}
const idSymbol = Symbol('id');
// 유니크한 값을 줄 수 있다.
carA[idSymbol] = 300;
console.log(carA);

// 다음과 같은 방식으로 id값을 부여하면 에러가 발생한다.
// carA.id = 300;

// 위의 idSymbol에 값을 부여하는 방법과 동일한 방법이다. 표현의 차이
const idSym = Symbol('id');
let carA = {
    id: 1,
    name: 'morning',
    brand: 'kia',
    price: 1000,
    [idSym]: 300
}


// Symbol은 for…in 과 getOwnPropertyNames에서 제외된다.
// for...in의 경우 => symbol property에서 제외된다.
for (const key in carA) {
    console.log(key);
}
// getOwnPropertyNames의 경우 => symbol property에서 제외된다.
console.log(Object.getOwnPropertyNames(carA));

// getOwnPropertySymbol의 경우 => symbol property를 가져온다.
console.log(Object.getOwnPropertySymbols(carA));



// Symbol.for() 을 이용한 전역 심볼
console.log(Symbol.for('id') === Symbol.for('id'));

// description을 이용해 심볼을 찾음
let sym4 = Symbol.for("name");
let sym5 = Symbol.for("id");

// Symbol.keyFor() 을 이용한 전역 심볼을 만들 때 사용해서 description을 찾을 수 있다.
// 심볼을 이용해 description을 얻음
alert(Symbol.keyFor(sym4)); // name
alert(Symbol.keyFor(sym5)); // id







// Use Case
// 아래의 내용을 Case를 사용해서 구현할 수 있다.
// const RED = 'red';
// const ORANGE = 'orange';
// const YELLOW = 'yellow';
// const BLUE = 'blue';
// const dog = 'blue';

// function getImportantLevel(color){
//     switch (color) {
//         case RED:
//             return 'very important';
//         case ORANGE:
//             return 'important';
//         case YELLOW:
//             return 'little important';
//         case BLUE:
//             return 'not important';
//         default:
//             console.log(`${color} not included`);
//     }
// }
// console.log(getImportantLevel(BLUE));
// console.log(getImportantLevel(dog));



// 위와 같이 작성할 경우, 실수로 console.log(getImportantLevel(dog)); 다음과 같이 출력해도 blue라는 값이 출력되게 된다.
// 이를 방지하기 위해 Symbol을 이용해서 다음과 같이 구현할 수 있다.
const RED = Symbol('red');
const ORANGE = Symbol('orange');
const YELLOW = Symbol('yellow');
const BLUE = Symbol('blue');
const dog = 'blue';

function getImportantLevel(color) {
    switch (color) {
        case RED:
            return 'very important';
        case ORANGE:
            return 'important';
        case YELLOW:
            return 'little important';
        case BLUE:
            return 'not important';
        default:
            console.log(`${color} not included`);
    }
}
console.log(getImportantLevel(BLUE));
console.log(getImportantLevel(dog));




// class Car {
//     constructor() {
//         this.length = 0;
//     }

//     add(brand, name) {
//         this[brand] = name;
//         this.length++;
//     }
// }

// let myCars = new Car();
// myCars.add('kia', 'morning');
// myCars.add('hyundai', 'tucson');
// myCars.add('genesis', 'gv80');

// for (const car in myCars) {
//     console.log(car, myCars[car]);
// }

const length = Symbol('length');
class Car {
    constructor() {
        this[length] = 0;
    }

    add(brand, name) {
        this[brand] = name;
        this[length]++;
    }
}

let myCars = new Car();
myCars.add('kia', 'morning');
myCars.add('hyundai', 'tucson');
myCars.add('genesis', 'gv80');

for (const car in myCars) {
    console.log(car, myCars[car]);
}





class AlertService {
    constructor() {
        this.alerts = {};
    }

    addAlert(symbol, alertText) {
        this.alerts[symbol] = alertText;
        this.renderAlerts();
    }

    removeAlert(symbol) {
        delete this.alerts[symbol];
    }

    renderAlerts() { }
}

const alertService = new AlertService();

class MyComponent {
    constructor(thing) {
        this.componentId = Symbol(thing);
    }

    errorHandler(msg) {
        alertService.addAlert(this.componentId, msg);
        setTimeout(() => {
            alertService.removeAlert(this.componentId);
            console.log('Removed alert', this.componentId);
        }, 5000);
    }
}

let list = new MyComponent('listComponent');
let list2 = new MyComponent('listComponent');
let form = new MyComponent('inputComponent');

list.errorHandler('문제가 발생했습니다.');
list.errorHandler('이러이러한 이유로 에러가 발생했습니다.');