let counter = 0;
function getData(){
    console.log('fetching data',counter++);
}

function handleDebounce(call,time){
    let timer;
    return function(){
        if(timer) {clearTimeout(timer)}
            timer=setTimeout(()=>{
                call()
            },time)

    }
}
 const makeFun=handleDebounce(getData,1000)





function getfun() {
    document.getElementById("click").disabled = false;
    console.log('clicked....', counter++);
}

const handleThrottle = (getfun, time) => {
    return function () {
        document.getElementById("click").disabled = true;
        setTimeout(() => {
            getfun();
        }, time)
    }

}
const clickFun = handleThrottle(getfun, 5000)


