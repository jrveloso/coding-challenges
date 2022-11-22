//Create click event
document.querySelector("#btn5").addEventListener("click", rotate)

//Grab all buttons and assign value
const btns = document.querySelectorAll("button")
btns.forEach((btn, i) => btn.innerHTML += i+1)

//Create array without 5 btn
let btnsArray = Array.from(btns).filter(btn => btn.innerHTML !== "5")
console.log(btnsArray)

//Reassign order of array
let secondHalf = btnsArray.splice(4)
let reverseSecondHalf = secondHalf.splice(1).reverse()
const rearranged = secondHalf.concat(reverseSecondHalf)
btnsArray.splice(3, 0, rearranged)
btnsArray = btnsArray.flat()

//Create new array holding values
const boxes = btnsArray.map(btn => Number(btn.innerHTML))


function rotate() {
    //When btn5 is clicked

    boxes.unshift(boxes.pop())

    btnsArray.forEach((btn, i) => {
        btn.innerHTML = boxes[i]
    })
}