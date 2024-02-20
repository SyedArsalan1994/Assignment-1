"use strict";
//defininf the magicians function
function show_magicians(magicians) {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `The Great ${magicians[i]}`;
    }
}
let magicians = ['Arsalan', 'Bilal', 'Yousuf'];
make_great(magicians);
show_magicians(magicians);
