//단항 산술 연산자
var x = 1
console.log(x)
x = -x
console.log(x)
x = -x
console.log(x)

var y = 1
var result = ++y
console.log(result,y)  //2 2 
result = y++
console.log(result,y)  //2 3

//이항 산술 연산자
var a="4",b=2
console.log(a/b)
var a=4,b="2"
console.log(a/b)
var a=3,b=0
console.log(a/b)
var a=5,b=2
console.log(a%b)
var a=3,b=0
console.log(a%b)

//문자열과 이항 산술 연산자
var a = '5',b=2
console.log(a+b)
console.log(typeof(a+b))
console.log(a-b)
console.log(typeof(a-b))
console.log(a*b)
console.log(typeof(a*b))
console.log(a/b)
console.log(typeof(a/b))
console.log(a%b)
console.log(typeof(a%b))

var str1="str1",str2="str2"
console.log(str1+str2)
console.log(typeof(str1+str2))
console.log(str1-str2)
console.log(typeof(str1-str2))
console.log(str1*str2)
console.log(typeof(str1*str2))
console.log(str1/str2)
console.log(typeof(str1/str2))
console.log(str1%str2)
console.log(typeof(str1%str2))

//비교 연산자