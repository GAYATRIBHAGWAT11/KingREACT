// function volume(obj) {
//      boxVolume=obj.width*obj.height*obj.length;
//      return boxVolume;
// }
// console.log(volume({ width: 7, length: 2, height: 1 }))


function volume(obj){
    let value=Object.values(obj)
    let pro=1
    for(let i=0;i<value.length;i++){
        pro=pro*value[i]
    }
    return pro;
}
console.log(volume({ width: 7, length: 2, height: 1 }));
