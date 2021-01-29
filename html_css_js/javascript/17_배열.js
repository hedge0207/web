var emptyArr = []
console.log(emptyArr[0])	// undefined

var arr = [1,2,3,4,5]
console.log(arr[1])         // 2
console.log(typeof arr)     // object
console.log(arr.length)     // 5



var arr = new Array(3)
console.log(arr)            // [ <3 empty items> ]
console.log(arr.length)     // 3

var arr = new Array(1,2,3)
console.log(arr)            // [ 1, 2, 3 ]


var arr = []
arr[1] = 1
arr[2] = 2
console.log(arr[4])     // undefined
console.log(arr[0])     // undefined
console.log(arr)        // [ <1 empty item>, 1, 2 ]

var arr = [1,2,3,4]

delete arr[0]
console.log(arr)

arr.splice(0,1)
console.log(arr)


var arr = [1,2,3]
arr.x = -10
console.log(arr)                // [ 1, 2, 3, x: -10 ]

for (const key in arr){
    console.log(key,arr[key])
}
/*
0 1
1 2
2 3
x -10   // 불필요한 프로퍼티까지 출력
*/ 

arr.forEach((item,index) => console.log(index,item))

for (let i = 0; i < arr.length; i++) {
  console.log(i, arr[i]);
}

for (const item of arr) {
  console.log(item);
}


var arr = [0,1,2,3,4]
console.log(arr.length)	// 5

arr.length = 2
console.log(arr) // [ 0,1 ]


var arr2 = Array.from({ length: 2, 0: 'a', 1: 'b' })
console.log(arr2)	// [ 'a', 'b' ]

var arr3 = Array.from({ length: 3 }, function(v,i){return i+=3})
console.log(arr3)   // [ 3, 4, 5 ]

var arr1 = Array.of(1)
console.log(arr1)

var arr2 = Array.of(1,2,3)
console.log(arr2)

var arr3 = Array.of('Hello!')
console.log(arr3)


var arr = [0,1,2,2]
console.log(arr.indexOf(2))
console.log(arr.indexOf(3))
console.log(arr.indexOf(2,3))

var arr = [1,2]
console.log(arr.includes(1))
console.log(arr.includes(3))

var arr1 = [0,1]
var arr2 = [2,3]
result = arr1.concat(arr2)
console.log(result)
result = arr1.concat(11)
console.log(result)
result = arr1.concat(arr2,100)
console.log(result)
console.log(arr1)

var arr = [1,2]
var result = arr.push(7,8,9)
console.log(result)
console.log(arr)
result = arr.push([7,8,9])
console.log(arr)

var arr = [0]
var result = arr.pop()
console.log(result) // 0

result = arr.pop()
console.log(result) // undefined

console.log(arr)    // []

var arr = [0,1]
console.log(arr.shift())
console.log(arr.shift())
console.log(arr.shift())
console.log(arr)


var arr = ['x','y','z']
console.log(arr.slice())	// [ 'x', 'y', 'z' ]
console.log(arr.slice(1,2))
console.log(arr.slice(-2))

var arr1 = [1,2,3,4,5]
console.log(arr1.splice(1,3))       // [ 2, 3, 4 ]
console.log(arr1)                   // [ 1, 5 ]

var arr2 = [1,2,3,4,5,6,7,8,9]
console.log(arr2.splice(2))         // [ 3, 4, 5, 6, 7, 8, 9 ]
console.log(arr2)                   // [ 1, 2 ]

var arr3 = [1,2,3,4]
console.log(arr3.splice(0,2,13))    // [ 1, 2 ]
console.log(arr3)                   // [ 13, 3, 4 ]

var arr4 = [1,2,3,5]
arr4.splice(3,0,4)
console.log(arr4)

// JS의 배열은 배열이 아니다.
console.log(Object.getOwnPropertyDescriptors([1, 2, 3]))
