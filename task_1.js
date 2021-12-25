const logItems= function(arrei) {
    let index = 1;
    for (const item of arrei) {
        console.log(`${index} - ${item}`);
        index += 1;
    }
}

logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
