console.log('this is asyync programmign');
setTimeout(()=>{
    for(let i=5;i<50;i++){
        console.log('this is an index',i);
    }
},5000)
console.log('done printing');  