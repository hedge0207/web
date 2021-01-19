const user1 = {
    name: 'Cha',
    address: {
      city: 'Seoul'
    }
  };

  const user2 = Object.assign({}, user1);
  console.log(user1 === user2);
  
  user2.name = 'Park';
  console.log(user1.name);
  console.log(user2.name);
  

  console.log(user1.address === user2.address);
  
  user1.address.city = 'Daegu';
  console.log(user1.address.city);
  console.log(user2.address.city);
