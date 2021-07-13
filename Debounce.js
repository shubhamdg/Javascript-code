let counter = 0 ;

const getData = ()=> {
    console.log("fEtching data ", counter++)
}





const betterfun = function (fn ,d){
    let timer;
    let context = this ,
    args = arguments ; 
    return function () {

       timer = setTimeout(()=>{
   getData.apply(context , arguments )
        },d)
    }
}
const somethingnew = betterfun(getData, 300)