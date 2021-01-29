var obj = { name: 'Cha', gender: 'male', age:28 }
const strObject = JSON.stringify(obj)

// JSON 형식의 문자열 => 객체
const jsonToObject = JSON.parse(strObject)
console.log(typeof jsonToObject, jsonToObject)	// object { name: 'Lee', gender: 'male' }


var todos = [
    { id: 1, content: 'HTML', completed: true },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'JavaScript', completed: false }
]

// 배열 => JSON 형식의 문자열
var str = JSON.stringify(todos)
console.log(typeof str, str)      // string [{"id":1,"content":"HTML","completed":true},{"id":2,"content":"CSS","completed":true},{"id":3,"content":"JavaScript","completed":false}]

// JSON 형식의 문자열 => 배열
var parsed = JSON.parse(str)
console.log(typeof parsed, parsed)
/*
object [
    { id: 1, content: 'HTML', completed: true },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'JavaScript', completed: false }
]
*/