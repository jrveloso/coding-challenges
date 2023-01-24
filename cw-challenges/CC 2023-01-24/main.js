// Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

// The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

// Test.assertEquals(mygcd(30,12),6)
// Test.assertEquals(mygcd(8,9),1)
// Test.assertEquals(mygcd(1,1),1)

//Brute force
function mygcd(x, y) {
    //starting w/ y
    //divide by num -> check if x && y % num === 0
    //loop
    let common = 0
    for(let i = y; i > 0; i--) {
      if(x % i == 0 && y % i == 0) {
        common = i
        break
      }
    }
    return common
  }
  
  console.log(mygcd(30,12), 6)
  console.log(mygcd(8,9), 1)
  console.log(mygcd(1,1), 1)