function hasTargetSum(array, target) {
  // Write your algorithm here
  const compliments = {};
  for (const num of array) {
    if (compliments[num]) {
      return true;
    }
    compliments[target - num] = true;
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  let total = 0;
  for num in array
    total +=num
  return total === target
*/

/*
  Add written explanation of your solution here
  loop throught the array by target each element in the array,
  initialize a variable total which is equal to zero. add up each value in the array to get the sum of total elements then finaly compare the value of the total after the loop with the target parameter return true it they are equal false if otherwise
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
