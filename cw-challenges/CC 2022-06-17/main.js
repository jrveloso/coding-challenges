// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false.

//P(arameters)
//  pin
//R(eturns)
//  true or false
//E(xamples)
//  "1234"   -->  true
//  "12345"  -->  false
//  "a234"   -->  false
//P(seudo Code)
//  1.) When a user enters pin
//  2.) If string length is exactly 4 or 6 digits
//  3.) Return false if not
//  4.) If true, split into array
//  5.) Loop through array, checking if element is an integer
//  6.) If all integers, return true

function validatePIN (pin) {
    if(pin.length !== 4 && pin.length !== 6)
        return false;
    for(let i = 0; i <= pin.length; i++) {
        if(pin[i] > '9' || pin[i] < '0') {
            return false;
        } else {
            return true;
        }
    }
}
