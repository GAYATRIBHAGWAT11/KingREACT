function ingredients(obj){
    let value=Object.values(obj)
    let min=value[0]
    for(let i=0;i<value.length;i++){
        if(value[i]<min){
            min=value[i]
        }
    }
    return min

}
console.log(ingredients({
    "salt": 23,
    "oil": 12,
    "ketchup": 10
  }));