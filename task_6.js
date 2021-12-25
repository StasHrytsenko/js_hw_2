let input;
let numbers = [];
let total = 0;

while (2 + 2 == 4) {
    let input = prompt("Введите число");
    if (input === null) {
        console.log("Отменено пользователем");
        break;
    }

    input = Number(input);

    numbers.push(input);
}
console.log(numbers);

if (numbers.length) {
    for (let number of numbers) {
        total += number;
    }
    console.log(`Общая сумма чисел равна ${total}`);
}