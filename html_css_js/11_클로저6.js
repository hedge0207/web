// 잘못된 활용
// 아래 사용된 함수는 전역 함수지 클로저가 아니다.
// var arr = [];

// for (var i = 0; i < 5; i++) {
//   arr[i] = function () {
//     return i;
//   };
// }
// console.log(i)
// for (var j = 0; j < arr.length; j++) {
//   console.log(arr[j]());                // 5
// }


// let 활용
// const arr = [];

// for (let i = 0; i < 5; i++) {
//   arr[i] = function () {
//     return i;
//   };
// }

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]());
// }

// 클로저 활용
// var arr = [];

// for (var i = 0; i < 5; i++){
//   arr[i] = (function (id) {     // 2. 매개변수 id는 자유변수가 된다.
//     return function () {
//       return id     // 3. id는 상위 스코프의 자유변수이므로 그 값이 유지된다.
//     }
//   }(i)) // 1. 즉시 실행 함수는 i를 인자로 받는다.
// }

// for (var j = 0; j < arr.length; j++) {
//   console.log(arr[j]())
// }


