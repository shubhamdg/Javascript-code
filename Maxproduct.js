// hIGHEST 3 NUMBERS PRODUCT

const arr = [-1, 0, 2, 5, 3, -4];

const threeSum = (arr) => {
  let maxProduct = 0 
  for ( let i = 0 ; i<arr.length -2 ; i++){
    for ( let j = i+1 ; j<arr.length -1 ; j++){
      for ( let k = j+1 ;k<arr.length ; k++){
        let product = arr[i] * arr[j] * arr[k]
        if (product > maxProduct) {
          maxProduct = product 
        }
      }
    }
  }

return maxProduct ; 
}
  
  console.log(threeSum(arr));
