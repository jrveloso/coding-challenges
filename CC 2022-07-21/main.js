// When provided with a number between 0-9, return it in words.

//P(arameters)
//  integer between 0-9
//R(eturns)
//  word
//E(xamples)
//  Input :: 1
//  Output :: "One".
//P(seudo Code)
//  1.) When an integer is entered
//  2.) Convert to word version
//  3.) Return it

function switchItUp(number){
    switch(number) {
        case 0:
            return 'Zero'
            break;
        case 1:
            return 'One'
            break;
        case 2:
            return 'Two'
            break;
        case 3:
            return 'Three'
            break;
        case 4:
            return 'Four'
            break;
        case 5:
            return 'Five'
            break;
        case 6:
            return 'Six'
            break;
        case 7:
            return 'Seven'
            break;
        case 8:
            return 'Eight'
            break;
        case 9:
            return 'Nine'
            break;
    }
}
