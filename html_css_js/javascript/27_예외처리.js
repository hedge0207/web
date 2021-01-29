// try {
//     // 여기서 에러가 나면 에러가 난 시점에 코드의 흐름이 catch로 넘어간다.
//     throw new Error("억지로 발생시킨 에러!!")
//     console.log('에러 발생 이후의 코드는 실행되지 않는다.')
// } catch (e) {
//     console.log(`다음과 같은 에러가 발생했습니다: ${e.name}: ${e.message}`) // 다음과 같은 에러가 발생했습니다: Error: 억지로 발생시킨 에러!!
// } finally {
//     console.log("그래도 finally는 실행이 된다.")    // 그래도 finally는 실행이 된다.
// }

// try {
//     setTimeout(() => { throw new Error('Error!') }, 1000)
// } catch (e) {
//     console.log('에러를 캐치하지 못한다.')
//     console.log(e)
// }


// setTimeout(() => {
//     try {
//         throw new Error('Error 발생!')
//     } catch (e) {
//         console.log("이제 걸린다!")
//         console.log(e)
//     }
// },1000)


// 예외 전파
// try {
//     a()
//    	console.log("이 줄은 실행이 안됩니다!")
// } catch(e) {
//     console.log(e)              // 에러 발생!!
//     console.log('에러 복구!!')  // 에러 복구!!
// }
  
// function a() {
//     b()
// }
  
// function b() {
//     c()
// }
  
// function c() {
//     throw '에러 발생!!';
// }

// 예외 전파 막기
try {
    a()
   	console.log("이 줄은 실행 됩니다!")
} catch(e) {
    console.log('에러 발생 X!!!')
    console.log(e)
}
  
function a() {
    b()
}
  
function b() {
    c()
}
  
function c() {
    try{
        throw '에러 발생!!';
    } catch(e) {
        console.log(e)
    }
}