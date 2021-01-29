// var x = 1
// var foo = function(){
//     var x = 2
//     console.log(x)
// }
// foo()
// console.log(x)

// let과 const를 사용
// var x = 0
// {
//     var x = 1
//     console.log(x)
// }
// console.log(x)

// let y = 0
// {
//     let y = 1
//     console.log(y)
// }
// console.log(y)

// const z = 0
// {
//     const z = 1
//     console.log(z)
// }
// console.log(z)


// if (true){
//     var x = 1
// }
// console.log(x)



// 내부 함수
// function foo() {
//     var x = 0
//     function bar() {
//       console.log(x)
//       x = 10
//       console.log(x)
//     }
//     bar()
//     console.log(x)
//   }
  
//   foo()


// 외부에서 선언한 변수의 참조와 변경
// var x = 0

// function foo(){
//     console.log(x)
//     x = 10
// }
// foo()
// console.log(x)


// 중첩 스코프
// var x = 0
// function foo(){
//     var x = 10
//     function bar(){
//         var x = 20
//         function fao(){
//             console.log(x)
//         }
//         fao()
//     }
//     bar()
// }

// foo()


// var x = 10;

// function foo(){
//   var x = 100;
//   console.log(x);

//   function bar(){   // 내부함수
//     x = 1000;
//     console.log(x); // ?
//   }

//   bar();
// }
// foo();
// console.log(x); // ?


// 렉시컬 스코프
// var x = 1

// function foo() {
//   var x = 10
//   bar()
// }

// function bar() {
//   console.log(x)
// }

// foo()   // 1
// bar()   // 1

// function foo(){
//     y = 10
//     console.log(y)
// }
// foo()
// console.log(y)


// console.log(y)

// function bar(){
//     y = 20
//     console.log(y)
// }
// bar()
// console.log(y)



//delete를 통한 삭제
// var a = 10
// function tmp(){
//     b = 20
// }

// tmp()

// console.log(window.a)
// console.log(window.b)

// delete a
// delete b

// console.log(window.a)
// console.log(window.b)

// var GLOBALVALUE = {}

// GLOBALVALUE.person = {
//     name:'Cha',
//     age:28
// }

// GLOBALVALUE.value = 'globla'

// console.log(GLOBALVALUE.person.name)
// console.log(GLOBALVALUE.value)

(function () {
    var GLOBALVALUE = {}

  GLOBALVALUE.person = {
      name:'Cha',
      age:28
  }
  GLOBALVALUE.value = 'globla'

  console.log(GLOBALVALUE.person.name)  // Cha
  console.log(GLOBALVALUE.value)		  // global
}());
