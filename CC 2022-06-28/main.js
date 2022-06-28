// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

//P(arameters)
//  n - takes in numbers
//R(eturns)
//  string
//E(xamples)
//  If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
//  If he doesn't get 10 hoops, return the string "Keep at it until you get it".
//P(seudo Code)
//  1.) When n is entered
//  2.) If n >= 10, return "Great, now move on to tricks"
//  3.) Else, "Keep at it until you get it"

let hoopCount = n => n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it"