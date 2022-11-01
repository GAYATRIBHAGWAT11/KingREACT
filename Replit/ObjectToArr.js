// function ObjectToArr(obj){
// for(item in obj){
//     let soln=[item, obj[item]]
//     console.log([soln]);
// }
// }
// console.log(ObjectToArr({ a: 1, b: 2 }));

function SortObj(obj) {
    let len = obj.length;

    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (obj[i].price > obj[j].price)

                temp = obj[i]
            obj[i] = obj[j]
            obj[j] = temp

        }
    }
return obj

}
console.log(SortObj([
    { name: "lemonade", price: 50 },
    { name: "lime", price: 10 }
]));

