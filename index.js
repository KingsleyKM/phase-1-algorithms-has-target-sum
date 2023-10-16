function hasTargetSum(array, target) {
  // Write your algorithm here
//  for( let number of array){
//   if(number + number === target){
//     return true
//   }
//   else {
//     return false
//   }
//  }
for (let i = 0; i < array.length; i++) {
  const complement = target - array[i];
  for (let j = i + 1; j < array.length; j++) {
    if (array[j] === complement) return true;
  }
}
return false;
}

/* 
  Write the Big O time complexity of your function here
  linear time complexity
*/

/* 
  Add your pseudocode here
  intitialize a function calle hasTargetSum
  use for of to get eact element of the array 
  check if sum is equal to the target 
  return true or false  
*/

/*
  Add written explanation of your solution here
  Get the individual values within the array and add them up looking if they add up to the target value and if so return true else return false . Thus using splice to get the individual values of each
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
