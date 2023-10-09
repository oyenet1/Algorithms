const fs = require('fs');

const min = 1;
const max = 10000;
const numbers = [];

for (let i = min; i <= max; i++) {
    numbers.push(i);
}

for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
}

const text = numbers.join(', ');

fs.writeFileSync('random_numbers_1_to_10000.txt', text, 'utf-8');