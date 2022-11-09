function Revnum(num){

    let rev=1
rem=num%10
que=Math.floor(num/10)

rev=(rem*10)+que

if(num==rev){
    return true
}else{
    return false
}
}
console.log(Revnum(77));