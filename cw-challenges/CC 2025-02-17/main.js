// Remove all duplicates in the array
// array -> array
// Will always have something

// [2, 3, 1, 4, 2, 2, 5] -> [ 2, 3, 1, 4, 5]
// [1, 1, 1, 1, 1, 0] -> [ 1, 0 ]
// [5] -> [5]
// [] -> []

// if a.length <= 0, return []
// filter

function removeDupes(a) {
    if(a.length <= 1) {
        return a
    }
    // let results = [] 
    // for(let i = 0; i < a.length; i++) {
    //     if(!results.includes(a[i])) {
    //         results.push(a[i])
    //     }
    // }
    // return results
    let results = new Set(a)
    return [...results.values()]
}

console.log(removeDupes([2, 3, 1, 4, 2, 2, 5]), [ 2, 3, 1, 4, 5])
console.log(removeDupes([1, 1, 1, 1, 1, 0]), [ 1, 0 ])
console.log(removeDupes([5]), [5])
console.log(removeDupes([]), [])