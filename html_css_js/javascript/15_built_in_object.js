var a = new Object();
console.log(typeof a + ': ', a);

var b = new Object(undefined);
console.log(typeof b + ': ', b);

var c = new Object(null);
console.log(typeof c + ': ', c);


// String 객체를 반환한다
// var obj = new String('String');과 동치이다
var obj = new Object('String')
console.log(typeof obj + ': ', obj)

var strObj = new String('String')
console.log(typeof strObj + ': ', strObj)

// Number 객체를 반환한다
// var obj = new Number(123);과 동치이다
var obj = new Object(123)
console.log(typeof obj + ': ', obj)

var numObj = new Number(123)
console.log(typeof numObj + ': ', numObj)

// Boolean 객체를 반환한다.
// var obj = new Boolean(true);과 동치이다
var obj = new Object(true)
console.log(typeof obj + ': ', obj)

var boolObj = new Boolean(123)
console.log(typeof boolObj + ': ', boolObj)


console.log(typeof true)
console.log(typeof Boolean(1))
console.log(typeof new Boolean(1))

var str = new String("hello! world!")
console.log(str.toUpperCase())


console.log(isFinite(undefined))

console.log(parseFloat('3.14'))         // 3.14
console.log(parseFloat('10.00'))        // 10
console.log(parseFloat('34 45 66'))     // 34
console.log(parseFloat(' 60 '))         // 60
console.log(parseFloat('28 years'))     // 28
console.log(parseFloat('He was 28'))    // NaN

console.log(parseInt(12))
console.log(parseInt(12.3))
console.log(parseInt('12.345'))
console.log(parseInt('10',2))
console.log(parseInt(parseInt('0x10')))
console.log(parseInt('Q123'))

var uri = 'http://example.com?address=대전&hobby=programmin&watching';
var enc = encodeURI(uri)
var dec = decodeURI(enc)
console.log(enc)
console.log(dec)

var uri = 'http://example.com?address=대전&hobby=programmin&watching';
var encc = encodeURIComponent(uri)
var decc = decodeURIComponent(dec)
console.log(encc)
console.log(decc)

console.log(0.1+0.2)
console.log(0.1+0.2==0.3)

function isEqual(a, b){
    // Math.abs는 절댓값을 반환한다.
    // a와 b의 차이가 JavaScript에서 표현할 수 있는 가장 작은 수인 Number.EPSILON보다 작으면 같은 수로 인정할 수 있다.
    return Math.abs(a - b) < Number.EPSILON;
}


console.log(isEqual(0.1 + 0.2, 0.3));

var numObj = 1234.5678;

console.log(numObj.toPrecision())
console.log(numObj.toPrecision(1))

console.log((28).toString())
console.log((10).toString(2))

console.log(Math.PI)

// round
console.log(Math.round(-1.9)); // -2
Math.round(1);    // 1
Math.round();     // NaN

console.log(Math.ceil(-1.6))
for(var i=0;i<3;i++){
    console.log(Math.random())
}

console.log(Math.max(4,5,9))

// 배열에 적용
const arr = [4,5,9]
const maxValue = Math.max.apply(null,arr)
console.log(maxValue)
console.log(Math.max(...arr))

var date = new Date()
console.log(date)

var date = new Date(0)
console.log(date)


var date = new Date('January 26, 2021 20:56:10')
console.log(date)

var date = new Date('2021/01/26/20:56:10')
console.log(date)


var date = new Date(2021, 1)
console.log(date)

var date = new Date(2021, 1, 26, 21, 00, 30, 0)
console.log(date)

var date = new Date('2021/1/26/21:00:30:10')
console.log(date)

var date = Date()
console.log(typeof date, date)

var now = Date.now()
console.log(now)

var d = Date.parse('2021/1/26/21:00:30:10')
console.log(d)

var d = Date.parse('January 26, 2021 20:56:10')
console.log(d)

var d = new Date()
const year = d.getFullYear()
const month = d.getMonth()
const day = d.getDay()
console.log(year)
console.log(month)
console.log(day)

var d = new Date()
d.setFullYear(2016)
console.log(d.getFullYear())	// 2016

d.setMonth(3)
console.log(d.getMonth())

d.setDate(17)
console.log(d.getDate())

var d = new Date()
console.log(d.getDay())

var d = new Date()
d.setHours(1)
d.setMinutes(2)
d.setSeconds(3)
d.setMilliseconds(456)
console.log(d.getHours())
console.log(d.getMinutes())
console.log(d.getSeconds())
console.log(d.getMilliseconds())


var date = new Date()
var millise = date.getTime()
console.log(millise)

date.setTime(87895489)
var millise = date.getTime()
console.log(date)
console.log(millise)

var d = new Date('2021/1/26/21:30')
console.log(d.toDateString())
console.log(d.toTimeString())


var strObj = new String('Cha')
console.log(strObj)

var strObj = new String(1)
console.log(strObj)

var str = "Hello Cha! Oh, Are you Okay?"
console.log(str.split(' '))
console.log(str.split())
console.log(str.split(''))
console.log(str.split(' ', 3))
console.log(str.split('o'))
