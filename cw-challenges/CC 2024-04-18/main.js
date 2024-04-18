// Modify the kebabize function so that it converts a camel case string into a kebab case.

// "camelsHaveThreeHumps"  -->  "camels-have-three-humps"
// "camelsHave3Humps"  -->  "camels-have-humps"
// "CAMEL"  -->  "c-a-m-e-l"
// Notes:

// the returned string should only contain lowercase letters

// string -> string

// loop letters in str -> if next letter is uppercase, return current letter with '-' pushed
// if current letter is uppercase -> return lower case
// return modified string

function kebabize(str) {
  const tmpStr = str
    .split("")
    .filter((e) => e.toLowerCase() !== e.toUpperCase())
    .join("");
  let res = tmpStr[0].toLowerCase();
  for (let i = 1; i < tmpStr.length; i++) {
    if (tmpStr[i].toUpperCase() == tmpStr[i]) {
      res = res + "-" + tmpStr[i].toLowerCase();
    } else {
      res += tmpStr[i];
    }
  }
  return res;
}
console.log(kebabize("MyCamelCasedString"), "my-camel-cased-string");
console.log(kebabize("myCamelCasedString"), "my-camel-cased-string");
console.log(kebabize("MyCamelHas3Humps"), "my-camel-has-humps");
console.log(kebabize("myCamelHas3Humps"), "my-camel-has-humps");
console.log(kebabize("CAMEL"), "c-a-m-e-l");
console.log(kebabize("cAMEL"), "c-a-m-e-l");
console.log(kebabize("oooeeuiIbeuy9"), "oooeeui-ibeuy");
console.log(
  kebabize("AbstractSingletonProxyFactoryBean"),
  "abstract-singleton-proxy-factory-bean"
);
console.log(
  kebabize("abstractSingletonProxyFactoryBean"),
  "abstract-singleton-proxy-factory-bean"
);
