// 동기적 콜백 함수
// function foo(f){
//     f()
// }
// console.log("Cha!")				
// foo(()=>console.log("Hello!"))	
// console.log("Have a nice day!")

// 비동기적 콜백 함수
// function bar(f){
//     setTimeout(f,1000)
// }
// console.log("Cha!")
// bar(()=>console.log("Hello!"))
// console.log("Have a nice day!")

// 콜백 지옥
class UserStorage{
    loginUser(id,password,onSuccess,onError){
        setTimeout(()=>{
            if(id=='Cha'&&password=="qwer@123"){
                onSuccess(id);
            } else {
                onError(new Error('not found'))
            }
        },2000)
    }
    
    getRoles(user,onSuccess,onError){
        setTimeout(()=>{
            if(user=='Cha'){
                onSuccess({name:'Cha',role:'admin'});
            } else {
                onError(new Error('not access'))
            }
        },2000)
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id')
const password = prompt('enter your pw')
userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                console.log(userWithRole.name, userWithRole.role)
            },
            error => console.log("error!")
        )
    },
    error => {
        console.log("error")
    }
)
