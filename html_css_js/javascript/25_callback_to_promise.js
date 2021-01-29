// 25_callback.js의 내용을 Promise를 사용하여 수정
class UserStorage{
    loginUser(id,password){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if(id=='Cha'&&password=="qwer@123"){
                    resolve(id)
                } else {
                    reject(new Error("에러 발생!!"))
                }
            },2000)
        })
    }
    
    getRoles(user){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if(user=='Cha'){
                    resolve({name:'Cha',role:'admin'})
                } else {
                    reject(new Error('에러 발생!!!!'))
                }
            },2000)
        })

    }
}

const userStorage = new UserStorage()
const id = prompt('enter your id')
const password = prompt('enter your pw')

userStorage.loginUser(id,password)
  .then(user => userStorage.getRoles(user))
  .then(user => console.log(`Hello! ${user.name}, you have a ${user.role} role.`))
  .catch(err => console.log(err))

