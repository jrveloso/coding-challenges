// John and Mary want to travel between a few towns A, B, C ... Mary has on a sheet of paper a list of distances between these towns. ls = [50, 55, 57, 58, 60]. John is tired of driving and he says to Mary that he doesn't want to drive more than t = 174 miles and he will visit only 3 towns.

// Which distances, hence which towns, they will choose so that the sum of the distances is the biggest possible to please Mary and John?

// Example:

// With list ls and 3 towns to visit they can make a choice between: [50,55,57],[50,55,58],[50,55,60],[50,57,58],[50,57,60],[50,58,60],[55,57,58],[55,57,60],[55,58,60],[57,58,60].

// The sums of distances are then: 162, 163, 165, 165, 167, 168, 170, 172, 173, 175.

// The biggest possible sum taking a limit of 174 into account is then 173 and the distances of the 3 corresponding towns is [55, 58, 60].

// The function chooseBestSum (or choose_best_sum or ... depending on the language) will take as parameters t (maximum sum of distances, integer >= 0), k (number of towns to visit, k >= 1) and ls (list of distances, all distances are positive or zero integers and this list has at least one element). The function returns the "best" sum ie the biggest possible sum of k distances less than or equal to the given limit t, if that sum exists, or otherwise nil, null, None, Nothing, depending on the language. 

// Examples:

// ts = [50, 55, 56, 57, 58] choose_best_sum(163, 3, ts) -> 163

// xs = [50] choose_best_sum(163, 3, xs) -> nil (or null or ... or -1 (C++, C, D, Rust, Swift, Go, ...)

// ys = [91, 74, 73, 85, 73, 81, 87] choose_best_sum(230, 3, ys) -> 228

// Notes:

// try not to modify the input list of distances ls
// in some languages this "list" is in fact a string (see the Sample Tests).

// t (sum of distances), k (# of towns), ls (array of distances)

// loop up to ls.length - k 
// 

function chooseBestSum(t, k, ls) {
    // create variable to store result closest to t
    let biggestCount = 0;
    // 
    let recurseTowns = function(townsSoFar, lastIndex) {
      townsSoFar = townsSoFar || [];
      //base case
      // if townsSoFar === number of towns
      if (townsSoFar.length === k) {
        // hold sum of distance
        let sumDistance = townsSoFar.reduce((a,b)=>a+b);
        // sum is less than or equal to max distance AND sum of distance is greater than biggestCount
        if (sumDistance <= t && sumDistance > biggestCount) {
            // set biggestCount equal to sumDistance
          biggestCount = sumDistance;
        }      
        return; //EJECT
      }
      //recursive case
      // loop through ls starting from given lastIndex + 1 OR 0
      for (let i = lastIndex + 1 || 0; i < ls.length; i++) {
        // call recurseTowns, parameters townsSoFar conact with ls[i]
        recurseTowns(townsSoFar.concat(ls[i]), i);
      }
    }
    recurseTowns();
    
    return biggestCount || null;
  }