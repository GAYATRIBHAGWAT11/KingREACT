// if(undefined){
//     console.log('aircampus');
// }else{
//     console.log('please learn undefined');
// }

// if(null){
//     console.log('aircampus');
// }else{
//     console.log('we know null');
// }


function FrequenxyObj() {
    let ans = []

    let freqObj = {
        1:2,
        5:1,
        2:1,
        3:1,
        4:2,

    }

    for (var key in freqObj) {
        if (freqObj[key] == 2) {
            ans.push(key)
        }
    }
    return freqObj;
}
FrequenxyObj();