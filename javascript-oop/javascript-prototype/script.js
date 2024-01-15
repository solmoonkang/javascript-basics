
// 자바스크립트의 프로토타입
const user = {
    name: "John",
    age: 45,
}
console.log(user.name); // John
// 위 user 변수에서 정의하지 않은 hasOwnProperty() 함수를 사용할 수 있다.
console.log(user.hasOwnProperty("email")); // false



// Constructor Function => 생성자 함수는 다른 객체를 만드는 함수이다.
function Person(name, email, birthday) {
    this.name = name;
    this.email = email;
    this.birthday = new Date(birthday);
    this.calculateAge = function () {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}
// 생성자 함수를 사용해서 객체를 만들 때는 'new' 키워드를 사용한다.
const john = new Person('john', 'john@abc.com', '7-10-91');
const han = new Person('han', 'han@abc.com', '2-8-91');
console.log(john);
console.log(han);





// Object.create()
function Person(name, email, birthday) {
    let person = Object.create(personsPrototype);
    person.name = name;
    person.email = email;
    person.birthday = new Date(birthday);
    return person;
}

const personsPrototype = {
    calculateAge() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

const pan = new Person('pan', 'pan@abc.com', '2-8-91');
console.log(pan);



// prototype chain 
const testArray1 = [1, 2, 3];
testArray1.push(4);
console.log(testArray1); // [1, 2, 3, 4]
console.log(Array.prototype);


const testArray2 = [1, 2, 3];
Array.prototype.push = function (x) {
    return 'pushed value: ' + x;
}
console.log(testArray2.push(4));
console.log(testArray2)