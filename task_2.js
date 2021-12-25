const calculateEngravingPrice = function(message, pricePerord) {
    return message.split(" ").length * pricePerord;
};

console.log(
    calculateEngravingPrice(
        "Proin sociis natoque et magnis parturient montes mus",
        10,
    ),
); // 80

console.log(
    calculateEngravingPrice(
        "Proin sociis natoque et magnis parturient montes mus",
        20,
    )
        
); //160

console.log(
    calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
); //240

console.log(
    calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
); //120
