/*  
    --- You probably know the "like" system from Facebook and other pages. 
    --- People can "like" blog posts, pictures or other items. We want to 
    --- create the text that should be displayed next to such an item. 
    --- Implement the function which takes an array containing the names of people 
    --- that like an item. It must return the display text as shown in the examples:
*/

/*
    []                                -->  "no one likes this"
    ["Peter"]                         -->  "Peter likes this"
    ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
    ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
    ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
*/

// Exercise 

const likes = (names) => {
    const len = names.length;
    let result;
    if (len == 0) {
        return "no one likes this";
    }
    switch (len) {
        case 1:
            result = names[0] + " likes this";
            break;
        case 2:
            result = names[0] + " and " + names[1] + " like this";
            break;
        case 3:
            result = names[0] + ", " + names[1] + " and " + names[2] + " like this";
            break;

        default:
            result = names[0] + ", " + names[1] + " and " + (len - 2) + " others like this";
            break;
    }
    return result;
}

let smaple1 = [];
let smaple2 = ["Ade"];
let smaple3 = ["Bunmi", "Alake"];
let smaple4 = ["Bunmi", "Alake", "Banji"];
let smaple5 = ["Joseph", "Bunmi", "Alake", "Banji"];
let smaple6 = ["Ade", "Joseph", "Bunmi", "Alake", "Banji"];

console.log(likes(smaple1));
console.log(likes(smaple2));
console.log(likes(smaple3));
console.log(likes(smaple4));
console.log(likes(smaple5));
console.log(likes(smaple6));