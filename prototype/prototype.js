// let arr=['gayatri', 'aditya'];

let obj={
    name:'gayatri',
    city:'nashik',
    getIntro:function(){
        console.log(this.name + ' from '  + this.city);
    }
}
// arr.__proto__.__proto__.__proto__=>null

let obj3={
    name:'aishwarya'
}

// obj3.__proto__=obj;

Object.prototype.obj=function(){
    console.log('dsgfeg');
}


//bind, call, apply

let name={
    name:'gayatri',
    age:22
}


let name2={
    name:'aishwarya',
    age:40
}
let printData=function(hometown, color){
    console.log(this.name+ ' is '+this.age+ ' years old ' +hometown + ' & her favourite colour is '+color );
}

printData.call(name2,'nashik')
printData.call(name, 'singapore')

printData.apply(name2, ['pune', 'black'])


let printName=printData.bind(name, 'indore','white')
console.log(printName);
printName()


// polyfill for bind



Function.prototype.myBind=function(...args){
    // args=>array of the argument passed
    let obj=this
    params=args.slice(1)
    return function(...args2){
        obj.apply(args[0], [...params, ...args2]);
        // concatenate
    }
}

let PrintMyName=printName.myBind(name,'dehradun', 'uk');
PrintMyName('india')
