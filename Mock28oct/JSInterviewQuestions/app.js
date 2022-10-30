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



