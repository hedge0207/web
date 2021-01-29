// var person = function(arg) {
//     var name = arg ? arg : '';
  
//     return {
//       getName: function() {
//         return name;
//       },
//       setName: function(arg) {
//         name = arg;
//       }
//     }
//   }
  
//   console.log(name)
//   var me = person('Lee')
  
//   var myName = me.getName()
  
//   console.log(myName)
  
//   me.setName('Kim')
//   myName = me.getName()

//   console.log(myName)


// 주의점1
// var person = function (personInfo) {
//     var info = personInfo
  
//     return {
//       getPersonInfo: function() {
//         return info
//       }
//     }
//   }
  
//   var me = person({ name: 'Lee', gender: 'male' })
  
//   var myInfo = me.getPersonInfo()
//   console.log(myInfo)
//   // myInfo:  { name: 'Lee', gender: 'male' }
  
//   myInfo.name = 'Kim'
  
//   myInfo = me.getPersonInfo()
//   console.log(myInfo)
//   // myInfo:  { name: 'Kim', gender: 'male' }


// 주의점2
// var person = function(arg) {
//     var name = arg ? arg : ''

//     return {
//         getName: function() {
//             return name
//         },
//         setName: function(arg) {
//             name = arg
//         }
//     }
// }

// var me = person('Lee')
// console.log(me.__proto__ === person.prototype) // false
// // 객체 리터럴 방식으로 생성된 객체와 동일하다
// console.log(me.__proto__ === Object.prototype) // true

// 주의점2 해결
var Person = function() {
var name;

var F = function(arg) { name = arg ? arg : ''; };

F.prototype = {
    getName: function() {
    return name;
    },
    setName: function(arg) {
    name = arg;
    }
};

return F;
}();

var me = new Person('Lee');

console.log(Person.prototype === me.__proto__)  

console.log(me.getName());
me.setName('Kim')
console.log(me.getName());