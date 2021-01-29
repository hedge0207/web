// 객체 리터럴
var emptyObj = {}
console.log(typeof emptyObj)     //object

var student = {
    name: 'Cha',
    gender: 'male',
    sayHello: function () {
        console.log('Hello! ' + this.name)
    }
}
console.log(typeof student)     //object
student.sayHello()              //Hello! Cha




// Object 생성자 함수
var someone = new Object();

// 프로퍼티 추가
someone.name = 'Cha';
someone.gender = 'male';
someone.sayHello = function () {
  console.log('Hello! ' + this.name);
};

console.log(typeof someone); // object

someone.sayHello();          //Hello! Cha


//public, private
function Person(name,gender) {
    var address = 'Daejeon'
    this.name = name
    this.gender = gender
    this.sayHello = function(){
        console.log('Hello! ' + this.name)
    }
}

var person = new Person('Cha', 'male')

console.log(person.name);
console.log(person.address)



// 프로퍼티의 값으로 변수에 할당된 값을 넣을 경우
var first = 1
var second = 2
var third = 3

const ordinal = {
    first,
    second,
    third,
}
console.log(ordinal)


//프로퍼티 값 일기
var student = {
    'last-name': 'Cha',
    gender: 'male',
    10:1000
}

console.log(student['last-name'])   //Cha

console.log(student.gender)         //male
console.log(student['gender'])      //male

console.log(student[10])        //1000
console.log(student['10'])      //1000



//프로퍼티 값 갱신
var student = {
    name: 'Cha',
    gender: 'male',
}

student.name = 'Kim'
console.log(student.name)


//프로퍼티 키, 값 조회
var student = {
    name: 'Cha',
    gender: 'male',
}
console.log(Object.keys(student))
console.log(Object.values(student))
console.log(Object.entries(student))

var lst = ['one', 'two', 'three']

for (var idx in lst) {
    console.log(idx + ': ' + lst[idx])
}