// var gv = 'global';

// console.log(gv);
// console.log(window.gv);

// function foo() {
//   console.log('호출됨!!');
// }
// foo()
// window.foo();


// function foo(){
//     console.log("foo's this:",this)
//     function bar(){
//         console.log("bar's this:", this)
//     }
//     bar()
// }
// foo()


// 메소드의 내부 함수
// var obj = {
//     foo:function(){
//         console.log("foo's this:",this)
//         function bar(){
//             console.log("bar's this:",this)
//         }
//         bar()
//     }
// }
// obj.foo()


// 콜백 함수
// var obj = {
//   foo: function() {
//     setTimeout(function() {
//       console.log("callback's this: ",  this)  // window
//     }, 100)
//   }
// }

// obj.foo()


// 내부함수의 this가 전역객체를 참조하는 것을 피하는 방법 1
// var obj = {
//   foo: function() {
//     var that = this;  // this === obj

//     console.log("foo's this: ",  this);  // foo's this: obj
//     function bar() {
//       console.log("bar's this: ",  this); // bar's this: window

//       console.log("bar's that: ",  that); // bar's that: obj
//     }
//     bar();
//   }
// };

// obj.foo();


// 내부함수의 this가 전역객체를 참조하는 것을 피하는 방법 2
// var obj = {
//   foo: function() {
//     console.log("foo's this: ",  this)  // obj
//     function bar(a, b) {
//       console.log("bar's this: ",  this) // obj
//       console.log("bar's arguments: ", arguments)
//     }
//     bar.apply(obj, [1, 2])
//     bar.call(obj, 1, 2)
//     bar.bind(obj)(1, 2)
//   }
// }

// obj.foo()


// var obj = {
//     name: 'Cha',
//     sayName: function() {
//       console.log(this.name);
//     }
// }

// obj.sayName();



// function Person(name) {
//     this.name = name
// }
  
// Person.prototype.getName = function() {
//     console.log(this.name)
// }
  
// var cha = new Person('Cha')
// cha.getName()


// 객체 리터럴 방식과 생성자 함수 방식의 차이
// 객체 리터럴 방식
// var foo = {
//     name: 'Cha',
//     gender: 'male'
// }

// console.dir(foo)

// // 생성자 함수 방식
// function Person(name, gender) {
//     this.name = name;
//     this.gender = gender;
// }
  
// var me  = new Person('Lee', 'male');
// console.dir(me)

// var you = new Person('Kim', 'female');
// console.dir(you)



// function foo(name) {
//     // 생성자 함수가 new 연산자와 함께 호출되면 함수의 선두에서 빈객체를 생성하고 this에 바인딩한다.

//     /*
//     this가 호출된 함수(이 경우엔 foo)의 인스턴스가 아니면 new 연산자를 사용하지 않은 것이므로
//     이 경우 new와 함께 생성자 함수를 호출하여 인스턴스를 반환한다.
//     arguments.callee는 호출된 함수의 이름을 나타낸다.
//     이 예제의 경우 foo로 표기하여도 문제없이 동작하지만 특정함수의 이름과 의존성을 없애기 위해서 arguments.callee를 사용하는 것이 좋다.
//     */
//     if (!(this instanceof arguments.callee)) {
//         return new arguments.callee(name)
//     }

//     // 프로퍼티 생성과 값의 할당
//     this.name = name
// }

// var a = new foo('Cha')
// var b = foo('Kim')

// console.log(a.name)	// Cha
// console.log(b.name)	// Kim




// // arguments.callee
// function foo(name){
//     console.log(arguments.callee)
// }
// foo('Kim')



// apply()
// var Person = function (name) {
//     this.name = name
//     // foo.name = name
// };

// var foo = {}


// Person.apply(foo, ['Cha'])

// console.log(foo) // { name: 'name' }

// function convertArgsToArray() {
//     console.log(arguments);
  
//     // arguments 객체를 배열로 변환
//     // slice: 배열의 특정 부분에 대한 복사본을 생성한다.
//     var arr = Array.prototype.slice.apply(arguments)
  
//     console.log(arr)
//     return arr
// }

// convertArgsToArray(1, 2, 3)



// call, apply for callback
//before call
function Person(name) {
    this.name = name
}
  
Person.prototype.foo = function(callback) {
if(typeof callback == 'function') {
    console.log(this)   // Person { name: 'Lee' }
    callback()
}
}

function bar() {
    console.log(this)       // window
}

var p = new Person('Lee')
p.foo(bar)

//after call
// function Person(name) {
//     this.name = name
// }

// Person.prototype.foo = function (callback) {
//     if (typeof callback == 'function') {
//         console.log(this)    // Person { name: 'Lee' }
//         callback.call(this)
//     }
// };
  
// function bar() {
//     console.log(this)       // Person { name: 'Lee' }
//     console.log(this.name)
// }
  
//   var p = new Person('Lee')
//   p.foo(bar)    // Lee


// bind
// function Person(name) {
//     this.name = name
// }

// Person.prototype.foo = function (callback) {
//     if (typeof callback == 'function') {
//         console.log(this)
//         // this가 바인딩된 새로운 함수를 호출
//         callback.bind(this)();
//     }
// };

// function bar() {
//     console.log(this)
//     console.log(this.name)
// }
  
//   var p = new Person('Lee')
//   p.foo(bar);  // Lee