// Inheritance
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

const john = new Client('cohn', 'cohn@abc.com', '010-000-1111', '서울');
// Client 클래스가 정의하지 않은 메서드임에도 Person 클래스를 상속받았기 때문에 사용할 수 있다.
console.log(john.introduced());


// super keyword
class Car {
    constructor(brand) {
        this.carName = brand;
    }

    present() {
        return 'I have a ' + this.carName;
    }
}

class Model extends Car {
    constructor(brand, model) {
        super(brand);
        this.model = model;
    }

    show() {
        return super.present() +', it is a '+ this.model;
    }
}