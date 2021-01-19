// var person = {
//     name:'Cha',
//     age:28
// }

// console.log(person.hasOwnProperty('name'))	//true



// var person = {
//     name:'Cha',
//     age:28
// }

// console.log(person.__proto__ === Object.prototype)	//true



// function Person(name){
//     this.name = name
// }

// var cha = new Person('Cha')

// console.log(Person.prototype.constructor === Person)
// console.log(Person.constructor === Function)
// console.log(cha.constructor === Person)



// var cha = {
//     name:"Cha",
//     age:28
// }

// console.log(cha.__proto__ === Object.prototype)
// console.log(Object.prototype.constructor === Object)
// console.log(Object.__proto__ === Function.prototype)
// console.log(Function.prototype.__proto__ === Object.prototype)


// function Person(name){
//     this.name = name
// }

// var cha = new Person('Cha')


// console.log(cha.__proto__ === Person.prototype)                // true
// console.log(Person.prototype.__proto__ === Object.prototype)   // true
// console.log(Person.prototype.constructor === Person)           // true
// console.log(Person.__proto__ === Function.prototype)           // true
// console.log(Function.prototype.__proto__ === Object.prototype) // true



// function Person(name) {
//     this.name = name
// }

// var cha = new Person('Cha')

// Person.prototype.work = function(){
//     console.log("Working")
// }

// cha.work()




// var str = 'test'
// console.log(typeof str)              
// console.log(str.constructor === String)                 

// var strObj = new String('test')
// console.log(typeof strObj)                 
// console.log(strObj.constructor === String)


// console.log(str.toUpperCase())
// console.log(strObj.toUpperCase())



// var str = 'test';

// 에러가 발생하지는 않는다.
// String.prototype.someMethod = function () {
//   console.log('Add method')
// };

// str.someMethod()


// function Person(name) {
//     this.name = name;
//   }
  
//   var cha = new Person('Cha');
  
//   // 프로토타입 객체의 변경
//   Person.prototype = { gender: 'male' };
  
//   var kim = new Person('Kim');
  
//   console.log(cha.gender); // undefined
//   console.log(kim.gender); // male
  
//   console.log(cha.constructor); // [Function: Person]
//   console.log(kim.constructor); // [Function: Object]



function Person(name) {
    this.name = name
}

Person.prototype.age = 28

var cha = new Person('Cha')
var kim = new Person('Kim')

console.log(cha.age)
console.log(kim.age)

cha.age = 20

console.log(cha.age)
console.log(kim.age)