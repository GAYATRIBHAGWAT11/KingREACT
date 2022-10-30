// what is operator?
// strict mode
// special operator=>delete,in,new,typeof,void,yield
// new operator=> object
// keyword =>reserve word
// null?? console.log('hello')
// undefined?? console.log('hello')
// string=> slice(cut)=>slice(startindex, endindex) only slice no splice
// if we dont find any method it will go and check into prototype whener all the nethods are present

// kahape undefined dega kahape error degaa
// slice(start, end(but excluding end))


// let para='asfdtwerytjhgsnfweh fwetrq32yt wfegfwef gfewtt';

// console.log(para.slice(0,15));
// console.log(para[2]);


// const months=['cherry','gauva','cherry2']

// months.splice(0,1,'kiwi')
// console.log(months);


// (function(){
//     let a = b = 3;
//   })();
//   console.log('b=>'+b);
  
//   console.log("a defined? " + (typeof a !== 'undefined'));
//   console.log("b defined? " + (typeof b !== 'undefined'));




// function foo() {
//     return 
//     {
//         message: "Hello World"
//     }
// }
// console.log(foo());



// function Vehicle (model, color, year, country) {
//     // console.log(model, color, year, country);
//     this.model = model;
//     // console.log(this.model);
//     this.color = color;
//     this.year = year;
//     this.country = country;
// }

// var car= Vehicle("Honda", "white", "2010", "UK")
// console.log(car);
// undefined



// class Vehicle{
//     constructor(model, color, year, country){
//         this.model = model;
//     // console.log(this.model);
//     this.color = color;
//     this.year = year;
//     this.country = country;
        
//     }
// }
// var car=new Vehicle("Honda", "white", "2010", "UK")
// console.log(car);
// output=>Vehicle { model: 'Honda', color: 'white', year: '2010', country: 'UK' }


// var car = new Vehicle("Honda", "white", "2010", "UK");
// console.log(car);

// function Vehicle(model, color, year, country) {
//     this.model = model;
//     this.color = color;
//     this.year = year;
//     this.country = country;
// }

// var y = 1;
// if (function f(){}) {
//     y += typeof f;
// }
// console.log(y);



// function foo() {
//     let x = y = 0;
//     x++;
//     y++;
//     return x;
// }

// console.log(foo(), typeof x, typeof y);

// function foo1()
// {
//   return {
//       bar: "hello"
//   };
// }

// function foo2()
// {
//   return
//   {
//       bar: "hello"
//   };
// }
// console.log(foo1());
// console.log(foo2());

(function() {
    console.log(1); 
    setTimeout(function(){console.log(2)}, 1000); 
    setTimeout(function(){console.log(3)}, 0); 
    console.log(4);
})();