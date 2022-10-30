// function closure11() {
//     console.log('hey');
//     let x = 10;
//     var y = 15;
//     function closure12() {
//         // console.log('this is value=>',x=45);
//         console.log(x + y);
//     }
//     x = 45;
//     // reference to that variable not the value of the variable
//     return closure12()
// }
// closure11()

// function inc() {
//     for (let i = 1; i <= 5; i++) {
//         // bcz of let is block scope and it eill make everytime fresh copy , and var it referes to the same copy of that variable
//         setTimeout(function () {
//             console.log(i);
//         }, i * 2000)
//     }
//     console.log('this is settimeout func');
// }
// inc()


// function inc1(){
//     for(var i=1;i<=5;i++){
//         function close(i){
//             setTimeout(()=>{
//                 console.log(i);
//             },i*1000)
//         }
//         close(i)
//     }
    
    
// }
// inc1


localStorage.setItem('firstName','gayatri')
console.log(localStorage.getItem('firstName'));