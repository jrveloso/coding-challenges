const convert = function(s, numRows) {
    // Return string as is if numRows is 1 or >= s length
    if(numRows === 1 || numRows >= s.length) {
        return s
    }

    // Two pointers, idx for subarray, d for direction
    let idx = 0
    let d = 1
    //Create array
    let rows = [...Array(numRows).map(() => [])]
    console.log(rows)

    for(let char of s) {
        rows[idx].push(char)
        // Decide direction to push char
        if(idx === 0) {
            d = 1
        } else if(idx === numRows - 1) {
            d = -1
        }
        // Adjust idx to correct subarray
        idx += d
    }
    
    // join subarrays into one string
    for(let i = 0; i < numRows; i++) {
        rows[i] = rows[i].join('')
    }
    //return joined array
    return rows.join('')
};

console.log(convert("PAYPALISHIRING", 3), "PAHNAPLSIIGYIR")
console.log(convert("PAYPALISHIRING", 4), "PINALSIGYAHRPI")
console.log(convert("PAYPALISHIRING", 1), "PAYPALISHIRING")