// arrays i linera data structure

const array=[1,2,3,4,5,6,7,8,9];
console.log(array[array.length-1]);
// =========================================================

// 2)way to declare array

const num=new Array(1,2,3,4,5)
console.log(num[num.length-1]);
// o/p=>5
// =======================================================
let fruit=new Array('cherry','strawberry','dragonfruit','kiwi')
console.log(fruit[2]);
// push
fruit.push('apple')
console.log(fruit);
// pop

fruit.pop('apple')
console.log(fruit);
// shift

fruit.shift()
console.log('shift=>',fruit);
// unshift

fruit.unshift('chiku')
console.log('unshift=>',fruit);

// indexOf
let names=['gayatri','ekta','aish','xyz','aish']
console.log(names.indexOf('aish'));

let arr2=[4,3,4,5,7,8,33]

console.log(arr2.lastIndexOf(7));


let fruit2=['cherry','strawberry','dragonfruit','kiwi']
console.log('includes method=>',fruit2.includes('kiwi'));


//includes only worl with ref datatypes,not with pimitive datatypes 

// find method(for object)

const arr1=[5,12,8,130,44]

// const found=arr1.find(element=>element>10)
// console.log('find element=>',found);

const found=arr1.find(element=>element<44)
console.log('find=>',found);



let fruits=[
    {
        name:'kiwi',
        price:500
    },
    {
        name:'apple',
        price:100
    },
    {
        name:'dragonfruit',
        price:400
    },
    {
        name:'custardapple',
        price:200
    }
]

// let fruitArray=fruits.find((element)=>{
//     return element.price===200
// })
// console.log(fruitArray);


// =======================================================

// concat method=>

let city1=['nashik','pune','jaypur']
let city2=['mumbai','delhi','chennai'];

let city=city1.concat(city2);
console.log("concatenated array=>",city);

// slice method

let slicedArr=city1.slice(0,2)
console.log('sliced array=>',slicedArr);

city1.splice(0,0,'calcutta','uk')
console.log('spliced array',city1);

// spread operator(es6)

let city3=[...city1,...city2]
console.log([...city1]);
console.log(city3);
// or
let city4=[...['nashik','pune','jaypur'],...city2]
console.log([...city1]);
console.log(city4);


// for of loop

for(let name of city1){
    // here name is just var and city1 is an array
    console.log('for of loop=>',name);
}
// foreach loop

city1.forEach((name,index)=>{
    console.log(name,index);
})

// join method=>

let student=['g','a','y','t','r','i']
console.log(student.join('-'));
// split
// let student2=student.split('_')
// console.log(student2);





