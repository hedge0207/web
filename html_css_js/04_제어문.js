var num = 0
while (num<3) {
    console.log(num++)
}
var num = 0
while (num<3) {
    console.log(++num)
}
for (let i=0;i<3;++i){
  console.log(i)
}
for (let i=1;i<=6;i++){
  for (let j=1;j<=6;j++){
    if (i+j===6){
      console.log([i,j])
    }
  }
}