// 함수 선언문
// function hello(name){
//   return "Hello! " + name
// }

// console.log(hello("Cha"))


// 기명 함수 표현식
// var hi = function hello(name){
//   return "Hello! " + name
// }
// console.log(hi("Cha"))	// Hello! Cha
// console.log(hello("Cha"))


// 익명 함수 표현식
// var hi = function(name){
//     return "Hello! "+name
// }
// console.log(hi("Cha"))	// Hello! Cha


// Function 생성자 사용
// var hello = new Function('name','return "Hello! "+name')
// console.log(hello("Cha"))




// 함수 호이스팅
// var result = plus(2,3)
// console.log(result)

// function plus(num1,num2){
//   return num1+num2
// }

// var result = minus(3,2)

// var minus = function(num1,num2){
//     return num1-num2
// }



// 일급 객체
// 무명의 리터럴(아래는 함수는 함수명이 없는 무명의 리터럴이다)로 표현이 가능
// 변수나 자료구조에 저장이 가능(변수 plus에 저장 가능)
// var plus = function(num1,num2){
//   return num1+num2
// }

// 함수의 매개 변수로 전달 가능
// 반환 값으로 사용 가능
// function calculate(func){
//   return function(num1,num2){
//         result = func(num1,num2)
//         return result
//     }
// }

// var rst = calculate(plus)
// console.log(rst(3,4))




// Call-by-value
// function foo(primitive){
//   primitive += 3
//   return primitive
// }

// var x = 3
// console.log(foo(x))
// console.log(x)



// Call-by-reference
// function foo(objective){
//   objective.name = "Lee"
//   objective.smoking = false
// }

// var obj = {
//   name:'Cha',
//   smoking:true
// }

// console.log(obj)
// foo(obj)
// console.log(obj)



// return
// function plusMinus(num1,num2){
//   var prst = num1+num2
//   var mrst = num1-num2
//   return [prst,mrst]
// }
// console.log(plusMinus(4,1))



// 프로퍼티
// function hello(name){
//   return "Hello! "+name
// }

// console.dir(hello)




// arguments 프로퍼티
// function plus(num1,num2){
//   console.log(arguments)
//   return num1+num2
// }

// plus()
// plus(1)
// plus(1,2)
// plus(1,2,3)


// function minus(){
//   var bigNum = 100
//   for (var i = 0;i<arguments.length;i++){
//       bigNum-=arguments[i]
//   }
//   return bigNum
// }
// console.log(minus())
// console.log(minus(5))
// console.log(minus(10,20,30))


// function foo(){
//   if (!arguments.length) return 0;
//   console.log(Object.prototype.toString.call(arguments))
//   var arr = Array.prototype.slice.call(arguments)
//   console.log(Object.prototype.toString.call(arr))
// }

// foo(1,2,3,4,5)



// caller 프로퍼티
// function callerFunc(func){
//   var result = func()
//   return result
// }

// function foo(){
//   return "caller: " + foo.caller
// }
// console.log(callerFunc(foo))



//length 프로퍼티
// function foo(){}
// function bar(x,y,z){}

// console.log(foo.length)
// console.log(bar.length)


//name 프로퍼티
// var named = function foo(){}
// var anonymous = function(){}

// console.log(named.name)
// console.log(anonymous.name)

// var namedFunc = function multiply(a, b) {
//   return a * b;
// };
// // 익명 함수 표현식(anonymous function expression)
// var anonymousFunc = function(a, b) {
//   return a * b;
// };

// console.log(namedFunc.name);     // multiply
// console.log(anonymousFunc.name);



// __proto__
// console.log({}.__proto__==Object.prototype)



// 즉시 실행함수
// 즉시 실행 함수는 소괄호로 감싸준다.
// 기명 즉시 실행 함수
// (function hello(){
//   console.log("기명 즉시 실행 함수 실행")
//   return "Hello!"
// }());

// 익명 즉시 실행 함수
// (function(){
//   console.log("익명 즉시 실행 함수 실행")
//   return "Hi!"
// }());

// (function () {
//   var foo = 1;
//   console.log(foo);
// }());

// var foo = 100;
// console.log(foo);



// 내부 함수
// function parent(pra){
//   var parentValue = pra
//   function child(){
//       var childValue = "Cha"
//       console.log("parentValue1: "+parentValue)
//       console.log("childValue1: "+ childValue)
//   }
//   child()
//   console.log("parentValue2: "+parentValue)
//   console.log("childValue2: "+ childValue)
// }

// parent("Ha")


// function hello(){
//   var hi = function(){
//       console.log("Hello!, Hi!")
//   }
//   hi()
// }

// hello()
// hi()

function isArrayLike(para){
  const MAX_ARRAY_INDEX = Math.pow(2,53)-1
  
  // ara가 null이 아니면 para.length를 반환하고 null이면 undefined를 반환
  const length = para == null ? undefiend : para.length

  //배열의 길이의 타입이 숫자형이고 그 길이가 0보다 크거나 같고, 유사 배열 인덱스의 최대치보다 작거나 같으면 유사배열이다.
  return typeof length === 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
}

console.log(isArrayLike('abc'));
console.log(isArrayLike(''));