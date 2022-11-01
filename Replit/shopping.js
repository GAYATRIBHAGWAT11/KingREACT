function shopping(obj){
for(item in obj){
   console.log(item);
}
}
console.log(shopping({ "Shampoo": 5.99, "Rubber Ducks": 15.99 }));