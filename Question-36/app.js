"use strict";
make_shirts();
make_shirts('Medium');
make_shirts('Small', 'This shirt is amazing');
//defining a function of make_shirt
function make_shirts(size = 'Large', text = 'I Love TypeScript') {
    console.log(`A ${size} sized shirt will be printed with a message "${text}".`);
}
