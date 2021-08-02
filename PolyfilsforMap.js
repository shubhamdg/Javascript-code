let fruits = ["x", "y","z"]

Array.prototype.map = function (callback){
    let arr = []
    for ( let i = 0 ; i<this.length ; i++){
        arr.push(callback(this[i]))
    }
        return arr
    }


let result = fruits.map(function(element){
    return element
})

console.log(result)