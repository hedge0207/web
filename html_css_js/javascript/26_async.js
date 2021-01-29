// function fetchUser(){
//     return new Promise((resolve,reject)=>{
//         resolve('Cha')
//     })
// }

// const user = fetchUser()
// user.then(console.log)

// 함수 앞에 async 키워드를 붙여준다.
// async function fetchUser(){
//     return "Cha"
// }

// const user = fetchUser()
// user.then(console.log)


// await
// function delay(ms){
//     // 정해진 시간이 지나면 resolve를 호출
//     return new Promise(resolve => setTimeout(resolve,ms))
// }

// async function getApple(){
//     // await 키워드가 붙은 작업이 끝날 때 까지 아래의 작업을 수행하지 않는다.
//     await delay(3000)
//     return 'Apple'
// }

// async function getBanana(){
//     await delay(3000)
//     return 'Banana'
// }

// 만일 위 코드를 async와 await 없이 작성하면 아래와 같다.
// function getBanana(){
//     return delay(3000)
//     .then(()=>'Banana')
// } 


// 아래와 같은 코드도
// function getFruits(){
//     return getApple()
//     .then(apple => {
//         return getBanana()
//         .then(banana => `${apple} + ${banana}`)
//     })
// }
// getFruits().then(console.log)

// async를 활용하면 아래와 같이 작성 가능하다.
// async function getFruits(){
//     const apple = await getApple()
//     const banana = await getBanana()
//     return `${apple} + ${banana}`
// }

// getFruits().then(console.log)


// 에러 처리는 try, catch를 활용한다.
// async function getApple(){
//     await delay(3000)
//     throw 'error'
//     return 'Apple'
// }

// async function getBanana(){
//     await delay(3000)
//     return 'Banana'
// }

// async function getFruits(){
//     let apple
//     let banana
//     try{
//         apple = await getApple()
//         banana = await getBanana()
//     } catch{
//         apple = 'error apple'
//         banana = 'error banana'
//     }
//     return `${apple} + ${banana}`
// }

// getFruits().then(console.log)


// 병렬 처리 방법1.
// function delay(ms){
//     return new Promise(resolve => setTimeout(resolve,ms))
// }

// async function getApple(){
//     await delay(3000)
//     return 'Apple'
// }

// async function getBanana(){
//     await delay(3000)
//     return 'Banana'
// }

// async function getFruits(){
//     const applePromise = getApple()
//     const bananaPromise = getBanana()
//     const apple = await applePromise
//     const banana = await bananaPromise
//     return `${apple} + ${banana}`
// }

// getFruits().then(console.log)


// 병렬 처리 방법2.
// function delay(ms){
//     return new Promise(resolve => setTimeout(resolve,ms))
// }

// async function getApple(){
//     await delay(3000)
//     return 'Apple'
// }

// async function getBanana(){
//     await delay(3000)
//     return 'Banana'
// }

// function getFruits(){
// 	return Promise.all([getApple(),getBanana()])
//     .then(fruits => fruits.join(' + '))
// }

// getFruits().then(console.log)


// race
function delay(ms){
    return new Promise(resolve => setTimeout(resolve,ms))
}

async function getApple(){
    await delay(3000)
    return 'Apple'
}

async function getBanana(){
    await delay(1000)
    return 'Banana'
}

function getFastestFruit(){
	return Promise.race([getApple(),getBanana()])
}

getFastestFruit().then(console.log)