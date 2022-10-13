// Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.
// For example: ["3:1", "2:2", "0:1", ...]
// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:
// if x > y: 3 points
// if x < y: 0 point
// if x = y: 1 point
// Notes:
// there are 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

//P(arameters)
//  array of strings
//R(eturns)
//  number
//E(xamples)
//  ['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3'] ==> 30
//P(seudo Code)
//  1.) Given an array of strings
//  2.) grab scores from each match
//  3.) if x > y: 3 points
//  4.) if x < y: 0 point
//  5.) if x = y: 1 point
//  6.) Return sum

function points(games) {
    let onlyScores = games.map(match => match.split("").filter((el, i) => i % 2 === 0) )
 
    return onlyScores
            .map((num, index) => {
                if(+num[0] > +num[1]) {
                    return 3
                } else if(+num[0] < +num[1]) {
                    return 0
                } else {
                    return 1
                }
            })
            .reduce((sum, curr) => sum + curr, 0)
}

console.log(points(['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3']))