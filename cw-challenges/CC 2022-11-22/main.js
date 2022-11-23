const romanToInt = function(s) {
    //split string
    //map -> integers
    return s.split("").map((letter, i, arr) => {
      switch(letter) {
        case "C":
          return (arr[i + 1] === "M" || arr[i + 1] === "D") ? -100 : 100;
          break;
        case "X":
          return (arr[i + 1] === "L" || arr[i + 1] === "C") ? -10 : 10;
          break;
        case "I":
          return (arr[i + 1] === "V" || arr[i + 1] === "X") ? -1 : 1;
          break;
        case "M":
          return 1000;
          break;
        case "D":
          return 500;
          break;
        case "L":
          return 50
          break;
        case "X":
          return 10;
          break;
        case "V":
          return 5;
          break;
      }
    }).reduce((a, c) => a + c, 0)
  };