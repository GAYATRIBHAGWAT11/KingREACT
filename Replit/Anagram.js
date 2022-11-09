function Anagram(str1,str2){
if(str1.split('').sort().join('')==str2.split('').sort().join('')){
    return 'true'
}else{
    return false
}
}
console.log(Anagram('elbow','below'));