//Завдання 1
// let i = 3;
// while (i) {
//     alert(i--); //Цей код виведе останнім значенням 1, бо при значенні змінної i = 0 while не спрацює
// } 


//Завдання 2
// let A = 1;
// let B = 2;
// let C = 3;
// if (A < B && B < C) {
//     alert(`Значення А подвоєнно: ${A *= 2}`);
//     alert(`Значення B подвоєнно: ${B *= 2}`);
//     alert(`Значення C подвоєнно: ${C *= 2}`);
// } else {
//     alert(`Значення А змінено на протилежне: ${A = -A}`);
//     alert(`Значення B змінено на протилежне: ${B = -B}`);
//     alert(`Значення C змінено на протилежне: ${C = -C}`);
// }


//Завдання 3
// let A = 3;
// let B = 2;
// let C = 1;
// if (A < B && B < C || A > B && B > C) {
//     alert(`Значення А подвоєнно: ${A *= 2}`);
//     alert(`Значення B подвоєнно: ${B *= 2}`);
//     alert(`Значення C подвоєнно: ${C *= 2}`);
// } else {
//     alert(`Значення А змінено на протилежне: ${A = -A}`);
//     alert(`Значення B змінено на протилежне: ${B = -B}`);
//     alert(`Значення C змінено на протилежне: ${C = -C}`);
// }


//Завдання 4
// let A = 0;
// let B = -2;
// let C = 2;
// let AB = Math.abs(A - B);
// let AC = Math.abs(A - C);
// if (AB > AC) {
//     alert(`Точка С знаходиться ближче до точки А на відстані ${AC}`);
// } else if (AB < AC) {
//     alert(`Точка B знаходиться ближче до точки А на відстані ${AB}`);
// } else if (AB == AC) {
//     alert(`Точки B та C знаходяться на однаковій відстані ${AB} до точки А`);
// }


//Завдання 5
// let x = 0;
// let y = 0;
// if (x == 0 && y == 0) {
//     alert(0);
// } else if (x != 0 && y == 0) {
//     alert(1); //точка лежить на осі Ox
// } else if (x == 0 && y != 0) {
//     alert(2); //точка лежить на осі Oy
// } else {
//     alert(3);
// }


//Завдання 6
// let x = 1;
// let y = 2;
// if (x > 0 && y > 0) {
//     alert('Точка знаходиться в першій чверті');
// } else if (x < 0 && y > 0) {
//     alert('Точка знаходиться в другій чверті');
// } else if (x < 0 && y < 0) {
//     alert('Точка знаходиться в третій чверті');
// } else if (x > 0 && y < 0) {
//     alert('Точка знаходиться в четвертій чверті');
// } else if (x == 0 || y == 0) { 
//     alert('Координати точки не відповідають умові завдання!');
// }


//Завдання 7
// let firstPoint = {x: 3, y: 5};
// let secondPoint = {x: 3, y: 2};
// let thirdPoint = {x: 6, y: 2};
// let unknownXOfFourthPoint = (firstPoint.x == secondPoint.x) ? thirdPoint.x : (firstPoint.x == thirdPoint.x) ? secondPoint.x : firstPoint.x;
// let unknownYOfFourthPoint = (firstPoint.y == secondPoint.y) ? thirdPoint.y : (firstPoint.y == thirdPoint.y) ? secondPoint.y : firstPoint.y;
// alert(`Шукана точка прямокутника має координати (${unknownXOfFourthPoint}; ${unknownYOfFourthPoint})`);


//Завдання 8
// let year = 2022;
// if (year > 0 && Number.isInteger(year)) {
//     if (year % 4 == 0) {
//         if (year % 400 == 0) {
//             alert('Рік високосний, 366 днів');
//         } else if (year % 100 == 0) {
//             alert('Рік НЕ високосний, 365 днів');
//         } else {
//             alert('Рік високосний, 366 днів');
//         }
//     } else {
//         alert('Рік НЕ високосний, 365 днів');
//     }
// }


//Завдання 9
// let number = 12;
// if (Number.isInteger(number)) {
//     if (number === 0) {
//         alert(`${number} - число нуль`)
//     } else if (number > 0) {
//         (number % 2 === 0) ? alert(`${number} - позитивне парне число`) : alert(`${number} - позитивне непарне число`);
//     } else {
//         (number % 2 === 0) ? alert(`${number} - негативне парне число`) : alert(`${number} - негативне непарне число`);
//     }
// }


//Завдання 10
// let number = 999;
// if (number > 0 && number < 1000) {
//     if (number.toLocaleString().length == 1) {
//         (number % 2 === 0) ? alert(`${number} - однозначне парне число`) : alert(`${number} - однозначне непарне число`);
//     } else if (number.toLocaleString().length == 2) {
//         (number % 2 === 0) ? alert(`${number} - двозначне парне число`) : alert(`${number} - двозначне непарне число`);
//     } else {
//         (number % 2 === 0) ? alert(`${number} - тризначне парне число`) : alert(`${number} - тризначне непарне число`);
//     }
// }


//Завдання 11
// //Префіксний варіант ++i:
// let i = 0;
// while (++i < 5) alert(i); //Виведе 1, 2, 3, 4, оскільки префіксний інкременту буде спочатку збільшувати змінну i, а потім повертати її значення
// //Саме тому 5 тут не виведеться


// //Постфіксний варіант i++:
// let i = 0;
// while (i++ < 5) alert(i); //Виведе 1, 2, 3, 4, 5, оскільки постфіксний варіант інкременту буде спочатку повертати змінну i, а потім збільшувати її значення
// //Саме тому тут виведеться 5


//Завдання 12
// //Постфіксна форма:
// for (let i = 0; i < 5; i++) alert(i); //Виведе 0, 1, 2, 3, 4, таке ж саме значення як і в іншому випадку, оскільки для циклу for неважливо яку форму інкременту використовувати

// //Префіксна форма:
// for (let i = 0; i < 5; ++i) alert(i); //Виведе 0, 1, 2, 3, 4, таке ж саме значення як і в іншому випадку, оскільки для циклу for неважливо яку форму інкременту використовувати 


//Завдання 13
// for (let i = 2; i <= 10; i += 2) alert(i);


//Завдання 14
// for (let i = 0; i < 3; i++) {
//     alert(`number ${i}!`);
// }

// let i = 0;
// while (i < 3) {
//     alert(`number ${i}!`);
//     i++;
// }


//Завдання 15
// let number = prompt('Введіть число більше 100:');
// while (+number < 100 && number !== null) {
//     number = +prompt('Введіть число більше 100:');
// }


//Завдання 16
// let n = 20;
// outer:
// for (let a = 2; a <= n; a++) {
//     for (let b = 2; b < a; b++) { 
//         if (a % b == 0) continue outer;
//     }
//     alert(`Число a = ${a} просте`);
// }


//Завдання 17
// let a = + prompt('Уведіть перше число:');
// let b = + prompt('Уведіть друге число:');
// let mid = (a + b) / 2;
// if (Number.isFinite(mid)) {
//     alert(`Середнє арифметичне двох чисел: ${mid}`);
// } else {
//     alert('Неможливо вирахувати середнє арифметичне цих двох чисел!');
// }


//Завдання 18
// let number = +prompt('Уведіть число:');
// while(!Number.isFinite(number) && number !== null) {
//     number = +prompt('Будь ласка, уведіть число:');
// }
// if (number !== null) {
//     alert(`Квадрат введеного числа: ${number ** 2}`);
// } else {
//     alert('Розрахунок скасовано!');
// }


//Завдання 19
// let a = + prompt('Уведіть перше число:');
// let b = + prompt('Уведіть друге число:');
// let c = + prompt('Уведіть третє число:');
// alert(`Різниця більшого та меншого чисел ${Math.max(a, b, c) - Math.min(a, b, c)}`);


//Завдання 20
// let a = + prompt('Уведіть число:');
// if (Number.isFinite(a)) {
//     if (a % 2 === 0) {
//         alert(`Число ${a} парне`);
//     } else {
//         alert(`Число ${a} непарне`);        
//     }
// } else {
//     alert('Розрахунок неможливий!');
// }


//Завдання 21
// let a = 99;
// if (a < 100 && a >= 0) {
//     let sum = 0;
//     for (let i = 0; i < a.toString().length; i++) {
//         sum += +a.toString()[i];
//     }
//     alert(`Кількість цифр в числі - ${a.toString().length}, сума цифр - ${sum}`);
// } else {
//     alert('Умова задачі не виконана!');
// }


//Завдання 22
// let type = +prompt('Для перетворення см в дюйми уведіть 1 \nДля перетворення дюймів в см уведіть 2');
// if (type === 1 || type === 2) {
//     if (type === 1) {
//         let number = +prompt('Уведіть см:');
//         alert(`${number} см = ${number/2.54} дюймів`);
//     } else {
//         let number = +prompt('Уведіть дюйми:');
//         alert(`${number} дюймів = ${number*2.54} см`);
//     }
// } else {2
//     alert('Перетворення скасовано!');
// }


//Завдання 23
// answer1 = +prompt(
//     'Який найпоширеніший газ в атмосфері землі?\n'
//     + '1. Азот\n'
//     + '2. Кисень\n'
//     + '3. Аргон\n'
//     + '4. Вуглекислий газ\n'
//     + 'Уведіть номер відповіді.'
// );
// if (answer1 == 1) {
//     alert('Правильно!');
// } else {
//     alert('Неправильно, правильна відповідь 1. Азот');
// }
// answer2 = +prompt(
//     'Яка столиця Гватемали\n'
//     + '1. Сантос\n'
//     + '2. Кобан\n'
//     + '3. Гватемала\n'
//     + '4. Чісек\n'
//     + 'Уведіть номер відповіді.'
// );
// if (answer2 == 3) {
//     alert('Правильно!');
// } else {
//     alert('Неправильно, правильна відповідь 3. Гватемала');
// }


//Завдання 24
// let number = + prompt('Уведіть число:');0
// if (number % 2 === 0) {
//     let sum = 0;
//     for (let i = 0; i < number.toString().length; i++) {
//         sum += +number.toString()[i];
//     }
//     alert(`Число ${number} парне, сума цифр числа: ${sum}`);
// } else {
//     let mul = 1;
//     for (let i = 0; i < number.toString().length; i++) {
//         mul *= +number.toString()[i];
//     }
//     alert(`Число ${number} непарне, добуток цифр числа: ${mul}`);
// }


//Завдання 25
// let a = + prompt('Уведіть довжину першої сторони:');
// let b = + prompt('Уведіть довжину другої сторони:');
// let c = + prompt('Уведіть довжину третьої сторони:');

// if (a + b > c && a + c > b && b + c > a) {
//     alert('Такий трикутник може існувати!')
// } else {4
//     alert('Такий трикутник НЕ може існувати!')
// }


//Завдання 26
// x = 4;
// y = 9;
// R = 10;
// (Math.sqrt(x**2 + y**2) <= R) ? alert('Точка лежить всередині кола') : alert('Точка лежить за межами кола');


//Завдання 27
// let user = {};
// user.name = 'John';
// user.surname = 'Smith';
// user.name = 'Pete';
// delete user.name;


//Завдання 28
// const user = {
//     name: "John"
// };
// user.name = "Pete"; // Працюватиме, бо const захищає від зміни саму змінну, а не її вміст (в даному випадку вміст - властивості об'єкта)
// user = 2; //А це вже не працюватиме, бо ми намагаэмось змінити саму змінну


//Завдання 29
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }
// let sum = 0;
// for (let salary in salaries) {
//     sum += salaries[salary];
// }
// alert(`Сума всіх зарплат: ${sum}`);


//Завдання 30
// example = {
//     first: 12,
//     second: -256,
//     third: Infinity,
//     fourth: 'string',
//     fifth: null
// }
// function multiplyNumeric(obj) {
//     for (let item in obj) {
//         if (typeof(obj[item]) == 'number') obj[item] *= 2;
//     }
// }
// multiplyNumeric(example);
// console.log(example);