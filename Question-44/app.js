"use strict";
// Define the function to store car information
function car_info(manufacturer, model, ...args) {
    let car = {
        "manufacturer": manufacturer,
        "model": model
    };
    args.forEach(([key, value]) => {
        car[key] = value;
    });
    return car;
}
// Call the function with required and additional information
let car_info1 = car_info("Toyota", "Corolla", ["color", "blue"], ["year", 2022]);
console.log(car_info1);
