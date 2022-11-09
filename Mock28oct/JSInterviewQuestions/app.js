console.log('Q1');
let a = []
let b = a
console.log(a == b);
console.log(a === b);

console.log('Q2');
let c = [20]
let d = [20]
console.log(a[0] == b[0]);
console.log(a[0] === b[0]);

console.log('Q3');
console.log(typeof NaN);

console.log('Q4');
let data = 10 - -10;
console.log(data);

console.log('Q5');
let set = new Set([1, 2, 2, 3, 4, 4, 5])
console.log(set);

console.log('Q6');

let data1 = { name: 'gayatri' }
console.log(delete data1.name);
// console.log(data1);

console.log('Q7');
let newData = ['peter', 'anil', 'sam']
let [y] = newData;
console.log(y);



console.log('Q8');
let newdata1 = { name: 'gayatri', age: 22, skill: '30' }
let newdata2 = { city: 'nashik' }

let arr = { ...newdata1, ...newdata2 }
console.log(arr);

console.log('Q9');
let newdata4 = { name: 'gayatri', age: 22, skill: '30' }
let newdata3 = { city: 'nashik' }
let newarr = { newdata4, ...newdata3 }
console.log(newarr);

console.log('Q10');
let newObj1 = { name: 'gayatri', age: 22, skill: '30' }
let newObj2 = { city: 'nashik', skill: 'FSD' }
let Obj = { ...newObj1, ...newObj2 }
console.log(Obj);
// same position, value


console.log('Q11');

// function Person(){
//     this.firstNamfirstName;
//     this.lastName=this.lastName;
// }
// const member=new Person('gayatri','ekta')
// Person.getFullName=function(){
//     return `${this.firstName} ${this.lastName}`
// }
// console.log(member.getFullName);


// function Person(firstName, lastName){
//     this.firstName=firstName;
//     this.lastName=lastName;
// }
// const lydia=new Person('lydia','hallie')
// const sarah=Person('sarah','smith')

// console.log(lydia)
// console.log(sarah);

console.log('deep and shallow copy');
// in this it doesnt copy value , it copies memory location=>reference copy
// pass by value and by reference
// object=>copy memory location
// var=>copy value

// shalloe copy=>value copy

let obj = { name: 'gayatri' }

// let user=Object.assign({},obj)
let user = { ...obj }

user.name = 'ekta'

console.log('object is:', obj);
console.log('user is', user);

// deep copy=>nested object get copied(memory location)
// shalloe cpy=>in this complete object get coppied(value)

let obj1 = {
    name: 'peter',
    address: {
        city: 'Noida',
        state: 'up'
    }
};
let user1 = JSON.parse(JSON.stringify(obj1))
user1.address = 'gurgaon'

console.log(obj1);
console.log(user1);
// deepcopy=>function and dates problem, to solove this we ise loadash

// let obj2={
//     name:'peter',
//     address:{
//         city:'Noida',
//         state:'up'
//     }
// };
// // let user2=_.cloneDeep(obj)
// user2.address='gurgaon'

// console.log(obj2);
// console.log(user2);



console.log('Q12');

let var1 = 5
function closure() {
    let var1 = 10
    console.log(var1);
}
closure()


let curring = (a = 5) => (b = 1) => {
    return a + b
}
console.log(curring()(2))

console.log("1" === true);
// false
console.log("1" == true);
// true


// console.log("vlue is=>", 1 < 0 == 0 == 0 < 1);not get it


console.log('flatten array');



function flatten(arr) {
    return [].concat(...arr)
}
console.log(flatten([4, 5, [6, 7]]));

// using inbuilt function

let Arr = [0, 1, 2, [3, 4]]
console.log(Arr.flat());



console.log('rest operator');

function RestOp(a, b, ...c) {
    console.log('this is a=>', a, 'this is b=>', b, 'this is rest operator=>', c);

}
console.log(RestOp('gayatri', 'aishwarya', 'ekta', 'aish'));


// conditional printing

function Print() {
    let count = 1;
    return function () {
        if (count % 3 == 0) {
            console.log("text");
        }
        count += 1
    }
}
let NewPrint = Print()
NewPrint()
NewPrint()
NewPrint()
NewPrint()
NewPrint()
NewPrint()

// pure and regular compo

console.log(null == undefined);

console.log(Number.isNaN("Hello"))



// var arr = [1, 2, 3, [5, 6, 7], 6, 7, 8, 9, [7, 8, 9, [3, 2, 1]]]
// var ans = [];
// Flatten(arr)
// function Flatten(data) {
//     for (let i = 0; i < data.length; i++) {
//         if (Array.isArray(data[i])) {
//             Flatten(data[i])
//         } else {
//             ans.push(data[i])
//         }
//     }
// }
//  console.log(ans);


console.log('Q13');
let obj11 = {
    name: 'gayatri',
    age: 21
}
console.log(obj11);

console.log('Q14');

class Gayatri {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
var objGayatri = new Gayatri('aishwarya', '22');
console.log(objGayatri);

console.log('Q15');

class Aish {
    constructor(props) {
        this.name = props
    }
}
let classObj=new Aish('ekta')
console.log(classObj);

console.log('Q16// single stone cosntructor');
var object=new(function(){
    this.age='22'
})()
console.log(object);

console.log('Q17// prototype cosntructor');

function Person() {}
Person.prototype.name = "Sudheer";
var object = new Person();
console.log(object);


console.log('Q17// call , apply, bind');

var employee1={
    name:'gayatri',
    age:21
}

var employee2={
    name:'gayatri',
    age:21 
}

let callfun=function empData(place){
    console.log(`my name is ${this.name} and im ${this.age} years old and im from ${place}`);
}

var ans=callfun.call(employee2 ,'nashik')
console.log(ans);

console.log('Q17// apply method');


let first={
    name:'kiwi',
    color:'green'
}

let second={
    name:'watermelon',
    color:'red'
}

var result=function fruitFub(price,place){
    console.log(`${this.name}'s color ${this.color} and its ${price} ruppes kg and its grow in ${place}`);
}

let fruitResult=result.apply(first,['300','rajasthan'])
console.log(fruitResult);


console.log('Q18 function currying');

function currying(a){
    return function(b){
        return function(c){
       return a+b+c
        }
    }
}
let curryFun=currying(1)(2)(3)
console.log(curryFun);




console.log('Q19// encoding decoding');

let uri = "employeeDetails?name=john&occupation=manager";
let encoded_uri = encodeURI(uri);
let decoded_uri = decodeURI(encoded_uri);

console.log("encoded uri=>",encoded_uri,"decoded uri=>",decoded_uri);


console.log('Q10 hoisting');

message("Good morning"); //Good morning

function message(name) {
  console.log(name);
}



console.log('Q21');

let Arr1=["a","b","c"]


let  maprr=Arr1.map((currElm)=>{
    return currElm
})
console.log(maprr);


console.log('Q22');

function fact(n,acc=1){
    if(n==0){
        return acc
    }
    return fact(n-1,n*acc)
}
console.log(fact(5));

