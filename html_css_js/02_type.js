/*
1.number
  1) 0으로 나눌 경우 에러가 아닌 Infinity를 반환
  2) NaN은 자기 자신을 포함한 어떤 것과도 같지 않다.
*/
const x1 = 1/0
console.log(x1)    //Infinity
const x2 = "aa"/2
console.log(x2)     //NaN
console.log(typeof(x2))   //number
console.log(x2===x2)    //false


/*
2. string
1) 이스케이프 시퀀스는 \를 사용
2) ``를 사용하여 줄바꿈과 문자열 내에 변수 사용이 가능하다.
*/

const str1 = "철수가 말했다 \"안녕\" "
console.log(str1)
const str2 = `자바스크
립트`
console.log(str2)
const str3 = `내가 연습하는 건 ${str2}`
console.log(str3)


/*
3. null, undefined
*/
const a = null
const b = undefined

console.log(typeof(a))
console.log(typeof(b))
console.log(a===b)
