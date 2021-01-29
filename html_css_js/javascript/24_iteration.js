// 배열은 이터러블 프로토콜을 준수한 이터러블이다.
const array = [1, 2, 3]

// Symbol.iterator 메소드는 이터레이터를 반환한다.
const iterator = array[Symbol.iterator]()

// 이터레이터 프로토콜을 준수한 이터레이터는 next 메소드를 갖는다.
console.log('next' in iterator) // true

// 이터레이터의 next 메소드를 호출하면 value, done 프로퍼티를 갖는 이터레이터 리절트 객체를 반환한다.
let iteratorResult = iterator.next()
console.log(iteratorResult) 	// {value: 1, done: false}
console.log(iterator.next()) 	// {value: 2, done: false}
console.log(iterator.next())	// {value: 3, done: false}