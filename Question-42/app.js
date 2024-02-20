"use strict";
//defininf the magicians function
function show_magicians(magicians) {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}
function make_great(magicians) {
    let great_magicians = [];
    for (let i = 0; i < magicians.length; i++) {
        great_magicians.push(`The Great ${magicians[i]}`);
    }
    return great_magicians;
}
let magicians = ['Arsalan', 'Bilal', 'Yousuf'];
let greatMagicians = make_great(magicians);
console.log("Original Magicians:");
show_magicians(magicians);
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
