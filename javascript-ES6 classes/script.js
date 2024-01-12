class Person {
    constructor(name, email, birthday) {
        this.name = name;
        this.email = email;
        this.birthday = new Date(birthday)
    }

    introduce() {
        return `Hello my name is ${this.name}`;
    }

    static multipleNumbers(x, y) {
        return x * y;
    }
}

const john = new Person('john', 'john@abc.com', '7-10-91');
console.log(john);

// 인스턴스가 아닌 클래스 이름을 이용해서 사용한다. => Person.multipleNumbers(x, y);
console.log(Person.multipleNumbers(2, 9));
console.log(new Person('haha', 'hoho', 1-2));