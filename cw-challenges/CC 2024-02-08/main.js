// This program tests the life of an evaporator containing a gas.

// We know the content of the evaporator (content in ml), the percentage of foam or gas lost every day (evap_per_day) and the threshold (threshold) in percentage beyond which the evaporator is no longer useful. All numbers are strictly positive.

// The program reports the nth day (as an integer) on which the evaporator will be out of use.

// Example:

// evaporator(10, 10, 5) -> 29
// Note:

// Content is in fact not necessary in the body of the function "evaporator", you can use it or not use it, as you wish. Some people might prefer to reason with content, some other with percentages only. It's up to you but you must keep it as a parameter because the tests have it as an argument.

// parameters
// content, evap_per_day, threshold

// return
// days (integer)

// Example:
// evaporator(10, 10, 5) -> 29

// convert threshold to percentage and store in variable thresholdPercent
// multiply threshold percent by content -> thresholdMl
// multiply evap_per_day by content -> gasLost in mL per day
// while loop, content > thresholdMl threshold -> content - gasLost

function evaporator(content, evap_per_day, threshold) {
  const thresholdPercent = threshold / 100
  const thresholdMl = thresholdPercent * content
  const evapPercent = evap_per_day / 100
  let gasLostDaily = evapPercent * content
  let days = 0

  while(content > thresholdMl) {
    days++
    content -= gasLostDaily
    gasLostDaily = evapPercent * content
  }

  return days
}

console.log(evaporator(10, 10, 10), 22);
console.log(evaporator(10, 10, 5), 29);
