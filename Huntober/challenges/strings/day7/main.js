let encryptedMsg = "e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs"

function fixString(string) {
    const letters = [ "O", "I", "Z", "E", "h", "S", "G", "L", "B", 'q' ]

    return string.split(" ")
                 .map( word => word.split("")
                                   .map( letter => {
                                            if(letters.includes(letter)) {
                                                return letters.indexOf(letter)
                                            } else if(!isNaN(letter)) {
                                                return letters[Number(letter)]
                                            } else {
                                                return letter
                                            }
                                        })
                                   .join(""))
                 .join(" ")
}
//Day 1 first function
console.log(fixString("PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770."))
encryptedMsg = fixString(encryptedMsg)
console.log(encryptedMsg)

//Create answer for Day 2, second function
function removeC(string) {
    return string.slice(string.indexOf('c') + 1)
                 .replaceAll('Eek!', "")
                 .split("")
                 .reverse()
                 .join("")
                 .split("v")
                 .map(word => word.charAt(0))
                 .slice(1)
}
let day2Key = removeC("af)|Cz>:CGAHY1_2+(OHYYTM!2vka,&yAlWJ3.r&ZVs4F5&bEa<1r1_nlsR!eA-dOUmgwd2=CE7?ynnl+KQf8lW8u4/Nh1|D7SK2uYz-Y $YD)q.VmLD-&P(lL=:HDMA1!?_R#P,V3bKLqUp_t.X:_dM<Mr9zQ~fKJOBDF&Qjen=d ZAR8ze5g-gj@aZ/I:M:!.IBXLq@vN&8L7oH, /0RFtH+.7%eXtM/mxV7*%0Hj.?FSm.Kh8=@jlUJ_S.ApQzye-xB7ZVA2AwEaxTa_snPX?>D5th&Ag/9)7%#uMN=J<h!#prB=:CI;U_.T5*#rb)9q<ht~W<BOmQlmy.<8EqIlR(Gh~~$zmW;Y$7dn-$bW1jf%PL),krpzE LQwsG;EQ;l:Z;+6#.3)KDA+s#k#YMmUhm% 2KB)GqR U@4B>+A9Vh62@:&SNKVas5%&N6Oz!s/%7(Pd1xWy#Kv>uqyX=VEyHbe-64|ex^& 2W(gD=>FT*?tMZO$(+B8uTj,DU2~QST(B|xls=9kzN|:4hXt~:R4|nir,6RN8fg~3!3!^!yWZ)bE@SI.zV5Z%V9Qf_^ 4az$?wqtWrRu+1aS9<%I=!xW.:ps f).($Qz9s;8:uxVqJN9K$42NG(0=j)wZ&U1oB?v^7WVP6QE6-?L;^aglPd5dHO(L2TT5+$NeK-P;js-UAiWCI7>Yr&8|md-X)U=%IpuY)9iymv~ _S^ ,&0|(22&(mIcux_4a196w^FN78kz2kX1k&Psc53d ctbl?Eek!kX7Ii.QR~M11<T!,w^xHVn4^Q=HH4#)=AevEek!ux_4a196w^FN7Eek!8kz2kX1k&Psc53d ctbl?kX7Ii.QR~M11<T!,w^xHVn4^Q=HH4#)=AEek!Eek!cvEek!MABf|bEek!dPLpPhh=>%UH<%/^H;8gSAkhmUCu:K?*jzEek!LYC/:E*RU=|s7jWDf8z7-zFqS<Ntoav?m8<Q(1ur3Dpd)(XjY1pE)but>eG@QfEek!$Wx8NRZgmQ5t2 kJd,?_R@%muEJBTdQ0-%mHHW20i8wqMK~Co^w?34ag9idsTeXgfqy4IEek!z7Q?Q)nG~5@~ieY_B=6! sVk~=Ts3T>j/ZAS)AKX3zOocGL icK#-x0Eek!yE+2*fz.4&%<>:RHx/B+IFRG*AK1Hn*PQZpEek!v;ZUzWcJC%lym^:+;GcC!qt@nS5SQEek!ikESbYI#-A.Sv .ksat s'worrEek!Eek!omot Eek!rof rebmeEek!merEek! Eek!ot deeEek!n uoy tahw si enEek!o tsrif siht sedisEek!eb gnirtsbus hcae ni retEek!carahc tsrifEek! eEek!Eek!hT .'V' *esaEek!crewEek!ol* nEek!Eek!o pu Eek!gnirts Eek!siEek!ht tilpEek!S")
console.log(day2Key)

let keyChars = [ 'S', 'p', 'a', 'c', 'e']

//Day 3, third function
function replaceChars(str) {
    return str.split("").map(letter => keyChars.includes(letter) ? " " : letter).join("")
}
console.log(replaceChars(encryptedMsg))
encryptedMsg = replaceChars(encryptedMsg)

//Day 4, reverse from day 2
const reverseIt = str => str.split("").reverse().join("")
encryptedMsg = reverseIt(encryptedMsg)
console.log(encryptedMsg)

const alphabetLower = [ "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z" ]

let alphabetUpper = [ "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z" ]


//Day 5, Filter array and give length
let puns = ["The Pawshank Redemption","Caturday Night Live","Only Meworders in the Building","I Love Mewcy"," Mewsummer Meowders","The Golden Purrs"," Purrlandia ","Meowpardy"," Meowstery Science Theater: Purrthousand"," Amewican Idol","Dog City","Doctor Mew "," The Meowing Fed","Mew Peter","The Vicar of Dogley"," Kittens","Meownton Abbey","Pets and the Kitty","Dogis and Bonehead","Pawlty Meowers ","The Meowpet Show","Barkos","The Catbert Purrport","The Pawffice","The Dogford Files"," Battlestar Catlactica","Catlumbo","SpongeDog Squarepants","NYPD Mew ","Fluffy the Meowpire Purrer","The Inbemewners","Meowder She Wrote","Paw & Order","30 Dog"," Pawvatar: The Last Meowbender","The Pawnight Show","Arrested Dogvelopment","Furiends","Mewie","Curb Your Dogthusiasm","Teenage Mewtant Ninja Turtles","Phineas and Purrb","Paw Trek"," Paw Trek: The Next Mewination"," Twin Mewks"," *C*A*T*S*","DogTales"," Game of Bones"," House of the Meowgon","The Purrlight Zone","Breaking Bone","The Meowre","The Dogpranos","The Rings of Meower"," The KIT Crowd","Strangepaw Things ","Catman: The Animeowted Series","Meowter Call Saul","Mewgerton ","Obark","Mewphoria","La Casa de Pawpel","Rick & Meowty","Amewican Purror Story"," Mewcifer","PawndaVision","Dogxter","The Meowndalorian"," Dog Lasso","Bark","Meowdern Pawmily "," Meowtlander","Bone Mirror","Barks and Recreation","How to Get Away with Meowder","Boneland ","Meowther Ted","Mewtopia","Mewey","The Mewkie Meowse Doghouse","Mewster Rogers' Neighborhood"
]
console.log(puns[8].split("").filter(letter => (letter === letter.toUpperCase()) && (alphabetLower.includes(letter) || alphabetUpper.includes(letter))))
function submissionFilter(array) {
       return array.filter(pun => pun.charAt(0) !== " ")
             .filter( pun => pun.charAt(pun.length - 1) !== " ")
             .filter(pun => pun.toLowerCase().includes("dog") === false)
             .filter(pun => pun.toLowerCase().includes("bark") === false)
             .filter(pun => pun.toLowerCase().includes("bone") === false)
             .filter(pun => (pun.length % 5) !== 0)
             .filter(pun => (pun.charCodeAt(0) + pun.charCodeAt(pun.length - 1)) % 2 !== 0)
             .filter(pun => pun.charAt(Math.ceil(pun.length/2)) % 2 === 0 ? pun.charAt(Math.ceil(pun.length/2) + 1) !== 'e' : pun.charAt(Math.ceil(pun.length/2)) !== 'e')
             .filter(pun => pun.split("")
                                .filter(letter => (letter === letter.toLowerCase())).length % 2 === 0)
             .filter(pun => pun.split("")
                                .filter(letter => (letter === letter.toUpperCase()) && (alphabetLower.includes(letter) || alphabetUpper.includes(letter))).length >= 2) 
             .filter(pun => pun.includes("S") === false) 
}
let passedSubs = submissionFilter(puns)
console.log(passedSubs.length)


//Day 6
function removeChar(str, x) {
    return str.split("").filter((letter, i) => (i + 1) % x !== 0).join("")
}
encryptedMsg = removeChar(encryptedMsg, 3)
console.log(encryptedMsg)


alphabetUpper = alphabetUpper.reverse()

const letterSwap = string => string.split("")
                                   .map(letter => {
                                        if(letter === letter.toLowerCase() && alphabetLower.includes(letter)) {
                                            return alphabetUpper[alphabetLower.indexOf(letter)]
                                        } else if(letter === letter.toUpperCase() && alphabetUpper.includes(letter)) {
                                            return alphabetLower[alphabetUpper.indexOf(letter)]
                                        } else {
                                            return letter
                                        }})
                                   .join("")
                                   

console.log(letterSwap(encryptedMsg))


