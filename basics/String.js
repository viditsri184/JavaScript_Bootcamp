const name = "Vidit";
const repoCount = 50;

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Last of us");

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('o'));


const newString  = gameName.substring(0, 4); // 4 excluded
// i.e 0 <= x < 4
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);


const unTrimString = "    Vidit ";
console.log(unTrimString)
console.log(unTrimString.trim());

const url = "https://google%20.com"

console.log(url.replace('%20.', '-'));

console.log(gameName.split(" "));