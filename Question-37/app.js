"use strict";
function describe_city(City, Country = 'Pakistan') {
    console.log(`${City} is in ${Country}.`);
}
describe_city('Karachi');
describe_city('Hyderabad');
describe_city('Tokyo', 'Japan');
