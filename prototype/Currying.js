// function scopes(){
//     var age=10;
//     console.log('inside fn',age);
//     {
//         console.log('inside block',age);
//     }
// }
// console.log('outside fn')
// scopes()

// var age=10;
// function scopes(){
//     console.log('inside fn',age);
//     {
//         age=20
//         console.log('inside block',age);
//     }
// }
// console.log('outside fn')
// scopes()

// console.log(age);

// let age=20

// getAge();
//  var getAge=()=>{
//     console.log('100');
// }
// canot access before initialization
// incase var=>getAge not function
// function is first class citizen


// function getFact(a){
//     return function fact(b){
//         return function fn(c){
//             console.log(a+b+c);
//         }
//     }
// }

// getFact(10)(15)(40)

// prototypical inheritance=>everything coming from global object
// obj.__proto__.proto=> null
// use/effect/usememo(combination of use state and ueffect) =>both are same


getName()
console.log(x);
var x=7
function getName(){
    console.log('hey gayatri');
}
getName()


// getName()

// var getName=()=>{
//     console.log('100');
// }
// getName()