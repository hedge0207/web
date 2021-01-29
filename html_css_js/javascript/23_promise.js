// const promise1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('Hi!!')
//     },1000)
// })

// promise1.then(value=>{
//     console.log(value) // Hi!!
// })



// const promise2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject('Hi!!')
//     },1000)
// })

// promise2
//   .then(value=>{
//       console.log("then",value)
//   })



// const promise3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject('Hi!!')
//     },1000)
// })

// promise3
//   .then(value=>{
//       console.log("then",value)
//   })
//   .catch(error=>{
//       console.log("catch",error)  // Hi!!
//   })


// 프로미스 체이닝
// const fetchNumber = new Promise((resolve,reject)=>{
//     setTimeout(() => resolve(1),1000)
// })

// fetchNumber
//   .then(num => num*2)
//   .then(num => num*3)
//   .then(num => {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>resolve(num+1),1000)
//     })
// })
// .then(num => console.log(num))


// const getHen = () => new Promise((resolve,rejecjt)=>{
//     setTimeout(()=>resolve('Chicken'),1000)
// })

// const getEgg = hen => new Promise((resolve,rejecjt)=>{
//     setTimeout(()=>resolve(`${hen} => Egg`),1000)
// })

// const cook = egg => new Promise((resolve,rejecjt)=>{
//     setTimeout(()=>resolve(`${egg} => Meal`),1000)
// })

// getHen()
//   .then(hen => getEgg(hen))
//   .then(egg => cook(egg))
//   .then(meal => console.log(meal))