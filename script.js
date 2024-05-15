// DOM Manipulation understanding
// ..1 Get Element By Id

// const heading1 = document.getElementById("heading");
// console.log(heading1);

//.. 2 Get Element by Tag name

// const heading = document.getElementsByTagName("h1");

// 3.... Get Element By Class Name

// const heading = document.getElementsByClassName(heading);
// const heading = document.querySelector(".heading");
// console.log(heading);

//=====================================

// Trivers Node

// Perent Node

/*const heading = document.querySelector(".heading");
const Perent = heading.parentNode;
console.log(Perent);
*/

// Ab hum Chlid Note ko smajty han

const perent = document.querySelector(".parent");

console.log(perent.childNodes);
