// object =>store data in the form of key value pair
// objects are dynamic, we can make any property at runtime
// let object={
//     name:'apple',
//     color:'red',
//     price:100,

//     fruit:{
//         intro:'delicious fruits!!!!!!!!!!'
//     },

//     enroll(){
//         return 'this is func in obj'
//     }
// }

// let objKey=object.color;
// console.log('this is obj kay=value=>',objKey);
// console.log(object.fruit.intro);
// console.log(object.enroll());
// console.log('---------------------------------------------------');

// factory function

// function createCourse() {
//     let object={
//         name:'apple',
//         color:'red',
//         price:100,

//         fruit:{
//             intro:'delicious fruits!!!!!!!!!!'
//         },

//         enroll(){
//             return 'this is func in obj'
//         }
//     }
//     return object;
// }
// // const object=createCourse();
// // console.log(object);
// console.log(createCourse());
console.log('------------------------------------------');



function createCourse() {
    return {
        name: 'apple',
        color: 'red',
        price: 100,

        fruit: {
            intro: 'delicious fruits!!!!!!!!!!'
        },

        enroll() {
            return 'this is func in obj'
        }
    }
}
// const object=createCourse();
// console.log(object);
console.log(createCourse());
console.log('----------------------------------------------');

function objParams(name, age) {
    return {
        name: name,
        age: age
    }
}
console.log(objParams('gayatri', 22));
console.log('-----------------------------------------------');

// constructor(pascalCase)

class Construt {
    constructor(title) {
        this.title,
            this.enroll = function () {
                console.log('hey');
            };
    }
}
let newObj = new Construt('javascript')
console.log(newObj.title);
newObj.enroll()
delete newObj.enroll()
// console.log(newObj.enroll());
console.log('--------------------------------------------------');

let obj = { number: 10 };
// pass by reference
let obj2 = obj;

console.log(obj);
console.log(obj2);
// here it will store memory location of that obj(let obj2=obj;) not directly value i.e. {number:10}


const fruit = {
    name: 'kiwi',
    price: 1000,
    enroll() {
        console.log('delecious fruit');
    }
}
let newFruit = { ...fruit }
console.log('new fruit=>', newFruit);
newFruit.name = 'apple';
console.log(newFruit);
console.log('---------------------------------------------------------');
// object .assign=>

let Fruit = Object.assign({}, fruit);
console.log(Fruit);
console.log('----------------------------------------------------------');



let SeaFood =
{
    name: 'SeaArchine',
    category: 'plant'
}
for (let name in SeaFood) {
    console.log(SeaFood[name]);
}

let forOf = ['shell', 'fish', 'rief', 'pearl']

for (let name of forOf) {
    console.log(name);
}
// --------------------------------------------------------------
for (let name of Object.keys(SeaFood)) {
    console.log(name, SeaFood[name]);
}
console.log('----------------------------------------------------');

// const product={
//     itemName:'kalanji shoes',
//     price:2000,
//     discount:20,
//     itemCode:'GA11B'
// }

function product() {
    return {
        itemName: 'kalanji shoes',
        price: 2000,
        discount: 20,
        itemCode: 'GA11B'
    }
}
const prod = product()
console.log(prod.itemCode);

// constructor func

class Product1 {
    constructor(itemNm, price, discount, code) {
        this.itemName = itemNm,
            this.price = price,
            this.discount = discount,
            this.itemCode = code,

            this.Discount = function () {
                return price * discount / 100;
            };
    }
}

let product1=new Product1('kalanji shoes',2000,20,'GA11B')
console.log('constructor func=>',product1.itemName);
console.log('discount=>',product1.Discount);
console.log('----------------------------------------------');


function createPerson(name,age, place){
    return {
        name,age,place
    }
}
let aishwarya=createPerson('asihwarya',)