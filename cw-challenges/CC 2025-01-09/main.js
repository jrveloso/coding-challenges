// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);
 

// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
// Example 3:

// Input: s = "A", numRows = 1
// Output: "A"
 

// Constraints:

// 1 <= s.length <= 1000
// s consists of English letters (lower-case and upper-case), ',' and '.'.
// 1 <= numRows <= 1000

const convert = (s, numRows) => {
    if(numRows === 1 || numRows >= s.length) {
        return s
    }

    let idx = 0
    let d = 1
    let rows = [...Array(numRows)].map(() => [])

    for(let char of s) {
        rows[idx].push(char)

        if(idx === 0) {
            d = 1
        } else if(idx === numRows - 1) {
            d = -1
        }

        idx += d
    }
    console.log(rows)

    for(let i = 0; i < numRows; i++) {
        rows[i] = rows[i].join('')
    }
    return rows.join('')
}

console.log(convert("PAYPALISHIRING", 3), "PAHNAPLSIIGYIR")
console.log(convert("PAYPALISHIRING", 4), "PINALSIGYAHRPI")
console.log(convert("A", 1), "A")