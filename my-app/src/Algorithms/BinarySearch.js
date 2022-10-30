// iterative and recursive apporoch


let arr=[5,7,34,78];

let find=78;
let start=0;
let end=arr.length-1;
let pos=undefined;
while(start<=end){
    let mid=Math.floor((start+end)/2)
    // we cant take arr.length bcz then it will start from there, and start end is keep changinf thst why
    // console.log(arr[mid]);
    if(arr[mid]===find){
        pos=mid
        break;
    }else if(arr[mid]<find){
        start=mid+1;
    }else{
        end=mid-1;
    }
    
}
console.log('position of the element=>',pos);