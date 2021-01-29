var arr = [4,5,10,2,100,1]
arr.sort()
console.log(arr)    // [ 1, 10, 100, 2, 4, 5 ]

// 숫자 배열 오름차순 정렬
// 비교 함수의 반환값이 0보다 작은 경우, a를 우선하여 정렬한다.
var arr = [4,5,10,2,100,1]
arr.sort(function (a, b) { return a - b; })
console.log(arr)    // [ 1, 2, 4, 5, 10, 100 ]



var todoList = [
    {id:3, content: 'JavaScript'},
    {id:1, content: 'React'},
    {id:2, content: 'Spring'}
]

function compare(k){
    return function(a,b){
        // 프로퍼티 값이 문자열인 경우, - 산술 연산으로 비교하면 NaN이 나오므로 비교 연산을 사용.
        return a[k] > b[k] ? 1 : (a[k] < b[k] ? -1 : 0)
    }
}

// id를 기준으로 정렬
todoList.sort(compare('id'));
console.log(todoList);

// content를 기준으로 정렬
todoList.sort(compare('content'));
console.log(todoList);

// for문으로 순회
var arr = [7,8,9]
for (let i = 0; i<arr.length; i++){
    console.log(arr[i])
}

// forEach 메소드로 순회
arr.forEach(function(i){
    console.log(i)
})

var arr = [3,6,9,12,15]

arr.forEach(function(item,index,self){
    console.log(`arr[${index}] = ${item}`)
    if(index===4){
        console.log(self)
    }
})

var arr = [2,4,6,8]

arr.forEach(function(item,index,self){
    self[index] += 2
})
console.log(arr)



var arr = [1,2,3,4]
var result = arr.map(function(itme){
    // 반환값이 새로운 배열의 요소가 된다. 반환값이 없으면 새로운 배열은 비어 있다.
    return itme += 3
})
console.log(arr)
console.log(result)


function Name(name) {
    this.lastName = name
  }
  
  Name.prototype.fullName = function (arr) {
    // 콜백함수의 인자로 배열 요소의 값, 요소 인덱스, map 메소드를 호출한 배열, 즉 this를 전달할 수 있다.
    return arr.map(function (fisrtName) {
      // x는 배열 요소의 값이다.
      return this.lastName + fisrtName // 2번째 인자 this를 전달하지 않으면 this === window
    }, this)
  }
  
  const nm = new Name('Cha')
  const fullNameArr = nm.fullName(['jong', 'Jun'])
  console.log(fullNameArr)



var oddNum = [1,2,3,4,5,6].filter(function(item,index,self){
// item % 2가 1, 즉 참이면 반환한다.
    return item % 2
})
console.log(oddNum)


var arr = [1, 2, 3, 4, 5]

var sum = arr.reduce(function(previousValue, currentValue, currentIndex, self){
    return previousValue + currentValue
})

console.log(sum)



var products = [
    { id: 1, price: 100 },
    { id: 2, price: 200 },
    { id: 3, price: 300 }
]
  
// price를 합산
const priceSum = products.reduce(function (pre, cur) {
    console.log(pre.price, cur.price)
    // 숫자값이 두번째 콜백 함수 호출의 인수로 전달된다.
    // 따라서, 숫자값인 pre에는 price라는 프로퍼티가 존재하지 않으므로 undefined가 된다.
    return pre.price + cur.price
})
/*
15
100 200
undefined 300
*/

var arr = [1,2,3,4,5]
var res = arr.find(function(item){
    return item===3
})
console.log(res)


var arr = [1,2,3,4,5]
var res = arr.findIndex(function(item){
    return item===3
})
console.log(res)	// 3