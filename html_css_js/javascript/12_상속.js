// 부모 생성자 함수
var Parent = (function () {
  // constructor
  function ParentConstructor(name) {
    this.name = name
  }

  // 메소드
  ParentConstructor.prototype.sayHi = function () {
    console.log('Hi! ' + this.name)
  }

  // 생성자를 반환한다.
  return ParentConstructor;
}())

// 자식 생성자 함수
var Child = (function () {
  // constructor
  function ChildConstructor(name) {e
    this.name = name
  }

  // 자식 생성자 함수의 프로토타입 객체를 부모 생성자 함수의 인스턴스로 교체.
  ChildConstructor.prototype = new Parent()
  console.log(ChildConstructor.prototype.constructor,"AAAAAA")

  // 메소드 오버라이드
  ChildConstructor.prototype.sayHi = function () {
    console.log('안녕하세요! ' + this.name)
  }

  // sayBye 메소드는 Parent 생성자함수의 인스턴스에 위치된다
  ChildConstructor.prototype.sayBye = function () {
    console.log('안녕히가세요! ' + this.name)
  }

  // 생성자를 반환한다.
  return ChildConstructor
}())

var child = new Child('Cha')
console.log(child)  //ParentConstructor { name: 'Cha' }

console.log(Child.prototype) 
// ParentConstructor { name: undefined, sayHi: [Function (anonymous)], sayBye: [Function (anonymous)] }

child.sayHi()  // 안녕하세요! Cha
child.sayBye() // 안녕히가세요! Cha

console.log(child instanceof Parent) // true
console.log(child instanceof Child)  // true




// 프로토타입 패턴 상속
// 부모 생성자 함수
// var Parent = (function () {
//   // Constructor
//   function Parent(name) {
//     this.name = name
//   }

//   // method
//   Parent.prototype.sayHi = function () {
//     console.log('Hi! ' + this.name)
//   };

//   // return constructor
//   return Parent
// }())

// // create 함수의 인수는 프로토타입이다.
// var child = Object.create(Parent.prototype)
// child.name = 'child'

// child.sayHi()  // Hi! child

// console.log(child instanceof Parent) // true