// console.log(x())

// function x () {             // functional hoisting // run the fun before its declaration
//    return 100
// }




// var x ;    // declaration is hoisted 

// console.log(x)    // undefined beacuse of hoisting 
// x = 10 ;   



// arrow function 

// console.log(x())
//  const x = () => {         // beacuse arrow doesnt do hoisting  
//  return 100
//  }

// 1. Arrow func are not hoisted .. they will stay where they are 
// 2. 'this' in arrow func is bined to the prev value or parent


 const obj = {
     somemethod : ()  => {
       return this 

     }
}

 var a = obj.somemethod
console.log(a())

// console.log(obj.somemethod())   

// The value of "this" inside an arrow function is basically what its value would've been 
// outside the arrow function 
// using arrow u cant create new keyword arrow
