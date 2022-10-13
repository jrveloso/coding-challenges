// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

// I love you
// a little
// a lot
// passionately
// madly
// not at all
// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nbPetals > 0.

//P(arameters)
//  nbPetals = number of petals
//R(eturns)
//  string
//E(xamples)
//  
//P(seudo Code)
//  1.) When nbPetals is provided
//  2.) Store phrases in an array
//  3.) If nbPetals < 6, return phrase[index- 1] that is equal to nbPetals
//  4.) If nbPetals >= 6, return 

function howMuchILoveYou(nbPetals) {
    let phrases = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all']

    if(nbPetals <= 6) {
        return phrases[nbPetals - 1]
    } else if(phrases[!(nbPetals % 6) - 1]) {
        return phrases[5]
    } else {
        return phrases[(nbPetals % 6) -1]
    }
}

