function keyValue(obj){
    console.log(Object.keys(obj), Object.values(obj));
}
console.log(keyValue({ a: 1, b: 2, c: 3 }));