function foo(a,b){
    console.log(a,b)
}

foo(1)

function foo(a, b) {
    // 매개변수의 값이 falsy value인 경우, 기본값을 할당한다.
    a = a || 0
    b = b || 0
  
    console.log(a,b)
  }
  
foo(1)

function foo(a,b,...rest){
    console.log(a,b,rest)
}
foo(1,2,3,4,5)


console.log(...[1,2,3])
console.log(...'Cha')


// concat
var arr = [1,2,3]
console.log(arr.concat([4,5,6]))    // [ 1, 2, 3, 4, 5, 6 ]

console.log([...arr,4,5,6])         // [ 1, 2, 3, 4, 5, 6 ]


// push
var arr1 = [1,2,3]
var arr2 = [4,5,6]
Array.prototype.push.apply(arr1,arr2)
console.log(arr1)       // [ 1, 2, 3, 4, 5, 6 ]

var arr3 = [1,2,3]
var arr4 = [4,5,6]
arr3.push(...arr4)
console.log(arr3)       // [ 1, 2, 3, 4, 5, 6 ]


//splice
var arr1 = [1, 2, 3, 6]
var arr2 = [4, 5]
/*
apply 메소드의 2번째 인자는 배열. 이것은 개별 인자로 splice 메소드에 전달된다.
[3, 0].concat(arr2) → [3, 0, 4, 5]
arr1.splice(3, 0, 4, 5) → arr1[3]부터 0개의 요소를 제거하고 그자리(arr1[3])에 새로운 요소(4, 5)를 추가한다.
*/
Array.prototype.splice.apply(arr1, [3, 0].concat(arr2))

console.log(arr1) // [ 1, 2, 3, 4, 5, 6 ]


var arr3 = [1, 2, 3, 6]
var arr4 = [4, 5]

// ...arr2는 [4, 5]을 개별 요소로 분리한다
arr3.splice(3, 0, ...arr4) // == arr1.splice(3, 0, 4, 5);

console.log(arr3) // [ 1, 2, 3, 4, 5, 6 ]


// copy
var arr  = [1, 2, 3]
var copy = arr.slice()

console.log(copy) // [ 1, 2, 3 ]

// copy를 변경한다.
copy.push(4)

console.log(copy) // [ 1, 2, 3, 4 ]
// arr은 변경되지 않는다.
console.log(arr)  // [ 1, 2, 3 ]


var arr = [1, 2, 3]
// ...arr은 [1, 2, 3]을 개별 요소로 분리한다
var copy = [...arr]

console.log(copy) // [ 1, 2, 3 ]

// copy를 변경한다.
copy.push(4)

console.log(copy) // [ 1, 2, 3, 4 ]
// arr은 변경되지 않는다.
console.log(arr)  // [ 1, 2, 3 ]



// 객체 리터럴 프로퍼티 기능 확장
var a = 1
var b = 2
var obj = {
    a,
    b
}
console.log(obj)	// { a: 1, b: 2 }

var obj = {}
var str = 'str'
var cnt = 0

obj['a'] = cnt
obj[str+'-'+ ++cnt] = cnt
obj[123] = '일이삼'
console.log(obj)	// { '123': '일이삼', a: 0, 'str-1': 1 }


var str = 'str'
var cnt = 0

var obj = {
    ['a']: cnt,
    [str+'-'+ ++cnt]: cnt,
    [123]: '일이삼'
}
console.log(obj)    // { '123': '일이삼', a: 0, 'str-1': 1 }


// 디스트럭처링
var arr = [1, 2, 3]

// 배열의 인덱스를 기준으로 배열로부터 요소를 추출하여 변수에 할당
// 변수 a, b, c 선언되고 arr(initializer(초기화자))가 Destructuring(비구조화, 파괴)되어 할당된다.
var [a, b, c] = arr
console.log(a, b, c) // 1 2 3


// 기본값
var [x, y, z = 5] = [1, 2]
console.log(x, y, z)    // 1 2 3

// 기본값이 무시된다.
var [x, y, z = 5] = [1, 2, 3]
console.log(x, y, z)    // 1 2 5

// 넘칠 경우
var [x, y, z] = [1,2,3,4]
console.log(x,y,z)  // 1 2 3
// 모자랄 경우
var [x, y, z] = [1,2]
console.log(x,y,z)  // 1 2 undefined


var obj = { firstName: 'GilDong', lastName: 'Hong' }

// 프로퍼티 키를 기준으로 디스트럭처링 할당이 이루어진다. 순서는 의미가 없다.
// 변수 lastName, firstName가 선언되고 obj(initializer(초기화자))가 Destructuring(비구조화, 파괴)되어 할당된다.
var { lastName, firstName } = obj

console.log(firstName, lastName) // GilDong Hong

var { firstName, lastName } = obj
console.log({ firstName, lastName }) // { prop1: 'a', prop2: 'b' }


const { prop1, prop2, prop3 = 'c' } = { prop1: 'a', prop2: 'b', prop3: 'd' }
console.log({ prop1, prop2, prop3 }) 


const todos = [
    { id: 1, content: 'HTML', completed: true },
    { id: 2, content: 'CSS', completed: false },
    { id: 3, content: 'JS', completed: false }
]

// filter 메소드의 콜백 함수는 대상 배열(todos)을 순회하며 첫 번째 인자로 대상 배열의 요소를 받는다.  
// todos 배열의 요소인 객체로부터 completed 프로퍼티만을 추출한다.
// var { completed } = { id: 1, content: 'HTML', completed: true }
// var { completed } = { id: 2, content: 'CSS', completed: false }
// var { completed } = { id: 3, content: 'JS', completed: false }
const completedTodos = todos.filter(function({ completed }) {
    console.log(completed)
    console.log({completed})
    return completed
})
console.log(completedTodos) // [ { id: 1, content: 'HTML', completed: true } ]