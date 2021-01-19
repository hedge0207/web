const user1 = {
    name: 'Cha',
    address: {
        city: 'Daejeon'
    }
}

const user2 = Object.assign({},user1,{name:'Park'})

console.log(user1.name)
console.log(user2.name)

Object.freeze(user1)

user1.name="Lee"
user1.address.city = "Deagu"
console.log(user1.name)
console.log(Object.isFrozen(user1))
console.log(user1.address.city)


//Deep freeze
function deepFreeze(obj) {
    const props = Object.getOwnPropertyNames(obj);
  
    props.forEach((name) => {
      const prop = obj[name];
      if(typeof prop === 'object' && prop !== null) {
        deepFreeze(prop);
      }
    });
    return Object.freeze(obj);
  }
  
  const user = {
    name: 'Cha',
    address: {
      city: 'Seoul'
    }
  };
  
  deepFreeze(user);
  
  user.name = 'Lee';           
  user.address.city = 'Ulsan';
  
  // 변경이 전부 무시된다.
  console.log(user);