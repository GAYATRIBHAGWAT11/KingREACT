

let count=0;
const getData = () => {
    // call an api and get data

    console.log('fetching data',count++);

}

const debounce=function(fn,d){
    let timer
    let context=this
    args=arguments
    clearTimeout(timer)
    return function(){
        let timer=setTimeout(()=>{
            getData(context,arguments)

        },d)
    }
}


const betterFunction=debounce(getData,1000)