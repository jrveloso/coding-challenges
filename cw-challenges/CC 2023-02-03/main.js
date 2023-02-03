// Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

// The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

// Test.assertEquals(mygcd(30,12),6)
// Test.assertEquals(mygcd(8,9),1)
// Test.assertEquals(mygcd(1,1),1)

//Recursive solution
function mygcd(x, y) {
    if(y === 0) {
        return x
    }
    return mygcd(y, x % y)
}
  
  console.log(mygcd(30,12), 6)
  // mygcd(12, 6)
  // mygcd(6, 0)
  console.log(mygcd(8,9), 1)
  
  console.log(mygcd(1,1), 1)
  // mygcd(1, 0)