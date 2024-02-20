"use strict";
//defining parameterized function with dictionary
function make_album(artist, title, tracks) {
    let album = {
        "artist": artist,
        "title": title
    };
    if (tracks !== undefined) {
        album["tracks"] = tracks;
    }
    return album;
}
let album1 = make_album('Atif Aslam', 'Tere Bin');
let album2 = make_album('Arijit Singh', 'Tere Hawale', 10);
let album3 = make_album('Farhan Saeed', 'Jal', 2);
//Printing the album information with objects values
console.log(album1);
console.log(album2);
console.log(album3);
