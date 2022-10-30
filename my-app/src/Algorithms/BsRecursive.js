let arr=[11,24,67,89,92,95,100]
// 4+6=5 mid=5

let start=0;
let end=arr.length-1;
find=100;
let pos=undefined;

function recursiveBinarySearch(arr,start,end){
    let mid=Math.floor((start+end)/2)
    // mid=89=>3
    // console.log(mid);
    if(arr[mid]===find){
        pos=mid;
        return 1;
    }else if(arr[mid]<=find){
        recursiveBinarySearch(arr,mid+1,end)
    }else{
        recursiveBinarySearch(arr,start,mid-1)
    }


}
recursiveBinarySearch(arr,start,end)
console.log(pos);

