// function foo(){
//     x = 10
// }
// foo()
// console.log(x)      // 10

// function bar(){
//     'use strict'
//     y = 20
// }
// bar()               // ReferenceError: y is not defined
// console.log(y)


function foo() {
    // non-strict mode
    var lеt = 10

    function bar() {
        'use strict'

        let = 20;
    }
    bar();
}
foo()


