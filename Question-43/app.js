"use strict";
function sandwich_order(...items) {
    console.log(`Making a sandwich with following items:`);
    items.forEach(item => {
        console.log(`- ${item}`);
    });
}
sandwich_order("Chicken", "Egg", "Onion");
sandwich_order("Beef", "Lettuce", "tomato");
sandwich_order("Chicken", "Egg", "Vinegar");
