// const i = 10;


// function show ()
//  {
//      const j = 20 ;
//     console.log(i)
//     console.log(j)    // using closuer you can access the outer varaible 
// }

// show ()


//inside inner function you can define outer varaibale function 
// using closuer you can access local varaible + outer var + global varaibale 
// outer fun can't access inner fun

// Other programming languages have garbage collector
// which clears the memory for u

// JavaScript - whenever a function completes executes, the memory inside that function is automatically release and freed by browser
// There is an exception to this: Closure
// it will create memory leak disadvantages 
// encapsulation is the advantages of clouser
// function show () {


// let i = "Hello champ";
// console.log("i is a vari of outer fun")


// function innerfun() {

//     let j = "OK got it"
//     console.log("i is a vari of outer fun")
//     console.log("j is a local vari of a inner fun")
// }
// innerfun()

// }
// show()




//
function cal (num1) {
    var sum = 0 
    console.log("calculate")
    function addNumbers(num2) {
        sum = num1+num2
        console.log(sum)
    }
    return addNumbers
}
var res = calculate(10)
console.log(res(2))




// closuer : function bind together within its lexical scope 

function x () {
    var a = 17

    function y () {
        console.log(a)
    }
    y()
}

x ()

//

function x () {
    var a = 7
    function y () {
        console.log(a)
    }
    return y 
}

var z = x () 
console.log(z)

//.........
z ()