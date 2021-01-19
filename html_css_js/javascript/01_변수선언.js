//var
var a = 1
console.log("var 선언",a)
a = 2
console.log("var 재할당",a)
var a = 3
console.log("var 재선언",a)
//아래와 같이 ,로 구분하여 복수의 변수 선언 가능
var a2 = "aa",a3="ㅁㅁ"
console.log(a2,a3)
//값 없이 변수 선언 가능
var a4
console.log(a4)

//const
const b = 1
console.log("const 선언",b)
//재선언, 재할당시 애러 발생
// b = 2
// console.log("const 재할당",b)
// const b = 3
// console.log("const 재선언",b)
//값이 변화하지 않는 것은 아니다.
const arr = [1,2,3]
arr.push(4)
console.log(arr)
//아래와 같이 ,로 구분하여 복수의 변수 선언 가능
const b2 = "aa",b3="ㅁㅁ"
console.log(b2,b3)
//값 없이 변수 선언 불가
// const b4
// console.log(b4)

//let
let c = 1
console.log("let 선언", c)
c = 2
console.log("let 재할당", c)
//재선언시 오류가 발생
// let c = 3 
// console.log("let 재선언", c)
//아래와 같이 ,로 구분하여 복수의 변수 선언 가능
let c2 = "aa",c3="ㅁㅁ"
console.log(c2,c3)
//값 없이 변수 선언 가능
let c4
console.log(c4)