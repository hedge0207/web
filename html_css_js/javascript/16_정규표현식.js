// var targetStr = 'Bibbidi Bobbidi Boo'

// // 문자열 bi를 대소문자를 구별하여 한번만 검색한다.
// var regexr = /bi/

// console.log(regexr.exec(targetStr))

// // 문자열 bi를 대소문자를 구별하지 않고 대상 문자열 끝까지 검색한다.
// var regexr = /bi/ig;

// console.log(targetStr.match(regexr))
// console.log(targetStr.match(regexr).length)


// var targetStr = 'Bibbidi Bobbidi Boo'

// // 임의의 문자 5개
// var regexr = /...../;

// console.log(targetStr.match(regexr))

// var regexr = /...../g
// console.log(targetStr.match(regexr))

// var regexr = /./g
// console.log(targetStr.match(regexr))

// var targetStr = 'Bibbidi Bobbidi Boo'
// var regexr = /bi/
// console.log(targetStr.match(regexr))


// var targetStr = 'Bibbidi'
// var regexr = /[bid]/g
// console.log(targetStr.match(regexr))    // [ 'i', 'b', 'b', 'i', 'd', 'i' ]

// var targetStr = 'Bi Boo Doo'
// var regexr = /[A-Z]+/g
// console.log(targetStr.match(regexr))    // [ 'B', 'B', 'D' ]

// // /[A-Z]+/gi와 동일
// var regexr = /[A-Za-z]+/g;
// console.log(targetStr.match(regexr));   // [ 'Bi', 'Boo', 'Doo' ]

// var targetStr = 'abcd 1234578000000000'
// var regexr = /[0-9]+/g
// console.log(targetStr.match(regexr))


// var targetStr = 'abcd 1234578000000000'
// var regexr = /[\d]+/g
// console.log(targetStr.match(regexr))

// var targetStr = 'abcd 1234578000000000'
// var regexr = /[\D]+/g
// console.log(targetStr.match(regexr))

// var targetStr = 'abcd 1234578000000000'
// var regexr = /[\w]+/g
// console.log(targetStr.match(regexr))    // [ 'abcd', '1234578000000000' ]

// var targetStr = 'abcd 1234578000000000'
// var regexr = /[\W]+/g
// console.log(targetStr.match(regexr))    // [ ' ' ]

// const url = 'http://example.com';

// // 'http'로 시작하는지 검사
// // ^ : 문자열의 처음을 의미한다.
// const regexr = /^http/;

// console.log(regexr.test(url)); // true


var targetStr = '12345'
var regexr = /^\d/
console.log(regexr.test(targetStr))