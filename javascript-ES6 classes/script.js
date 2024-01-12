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




class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    introduce() {
        return `Hello my name is ${this.name}`;
    }
}

class Client extends Person {
    constructor(name, email, phone, address) {
        super(name, email);

        this.phone = phone;
        this.address = address;
    }
}

const cohn = new Client('cohn', 'cohn@abc.com', '010-000-1111', '서울');
console.log(cohn);