class Person {
    constructor(name){
        this._name = name
    }
    
    sayHi(){
        console.log(`Hi! ${this._name}!`)
    }
}

const cha = new Person('Cha')
cha.sayHi()     // Hi! Cha!
console.log(cha instanceof Person)  // true


// console.log(Foo)
// class Foo {}

// console.log(Foo)	// ReferenceError: Cannot access 'Foo' before initialization
// class Foo {}


// var Foo = '';

// {
//   // 호이스팅이 발생하지 않는다면 ''가 출력되어야 한다.
//   console.log(Foo);
//   // ReferenceError: Cannot access 'Foo' before initialization
//   class Foo {}
// }