// let promise=new Promise((res,rej)=>{
//     rej('promise rejected')
// })
// promise.then((successMsg)=>{
//     console.log(successMsg);
// }).catch((successMsg)=>{
//     console.log(successMsg);
// })



// let p2=new Promise((res,rej)=>{
// let x='geeksforgeeks'
// let y='geeksforgeek'
// if(x==y){
//     res()
// }else{
//     rej()
// }
// })
// p2.then(()=>{
//     console.log('success!');
// }).catch(()=>{
//     console.log('some error has occured');
// })


// promise chanining

let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('resolved after 2 seconds');
    },2000)
})

p1.then((value)=>{
    console.log(value);
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('promise 2')
        },2000)
    })

}).then((value)=>{
    console.log('we ar done');
}).then((value)=>{
    console.log('now we are pakka done');
})