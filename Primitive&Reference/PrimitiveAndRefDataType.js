// primitive datatype
// var name='gayatri';
// console.log('string=>', name, (typeof name));


// let nullVar=null;
// console.log('null datatype=>',nullVar, (typeof nullVar));



// call apply bind


// let bio1={
//     name:'gayatri',
//     age:22
// }
let bio2={
    name:'ekta',
    age:20
}
let fun=function(state,distance,color){
    console.log('my name is '+this.name+ ' and im '+this.age+ ' years old & im from '+state+ 'and its '+distance+ 'myfav color is' +color );
}
// fun.call(bio1,'nashik')

// fun.apply(bio2, ['trimbak', '30km'])
// let bindMethod=fun.bind(bio2,'trimbak', '30km', 'black')
// bindMethod()



Function.prototype.myBind=function(...args){
    params=args.slice(1)
let object=this
return function(...args2){
    object.apply(args[0],[...params,...args2])
}
}
let newBind=fun.myBind(bio2, 'uk','100km ','violet')
newBind()